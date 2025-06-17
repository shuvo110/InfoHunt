import React, { useEffect, useState } from "react";
import Error from "../Error"; // ধরে নিচ্ছি Error কম্পোনেন্টটি বিদ্যমান
import Move from "../Home/Move";

function Weather() {
  const [inputValue, setInputValue] = useState(""); // ইনপুট ফিল্ডের মান রাখার জন্য স্টেট
  // এখানে selectedCity এর প্রাথমিক মান "Dhaka" থেকে "Thakurgaon" এ পরিবর্তন করা হয়েছে
  const [selectedCity, setSelectedCity] = useState("Thakurgaon"); // ড্রপডাউন থেকে নির্বাচিত শহরের জন্য স্টেট
  const [weatherData, setWeatherData] = useState(null); // আবহাওয়ার ডেটা রাখার জন্য স্টেট
  const [error, setError] = useState(null); // কোনো ত্রুটি হলে তা রাখার জন্য স্টেট
  const [loading, setLoading] = useState(false); // ডেটা লোড হচ্ছে কিনা তা জানানোর জন্য স্টেট
  const apiKey = "4aa2143cd54c8268a7641946f7c677de"; // OpenWeatherMap API কী

  // আবহাওয়ার ডেটা আনার জন্য অ্যাসিঙ্ক ফাংশন
  const fetchWeatherData = async (city) => {
    if (!city) {
      setError("অনুগ্রহ করে একটি শহরের নাম লিখুন অথবা নির্বাচন করুন।"); // শহর খালি থাকলে ত্রুটি বার্তা
      setWeatherData(null); // শহর খালি থাকলে ডেটা মুছে দিন
      return;
    }
    setLoading(true); // লোডিং স্টেট True করুন
    setError(null); // পূর্ববর্তী ত্রুটিগুলো মুছে ফেলুন

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        // যদি রেসপন্স সফল না হয় (যেমন, 404 সিটি খুঁজে না পেলে)
        const errorData = await response.json(); // API থেকে ত্রুটির বিস্তারিত তথ্য নিন
        throw new Error(
          errorData.message || "শহর খুঁজে পাওয়া যায়নি বা API ত্রুটি।"
        ); // ত্রুটির বার্তা সেট করুন
      }
      const data = await response.json(); // রেসপন্স JSON ফরম্যাটে পার্স করুন
      setWeatherData(data); // প্রাপ্ত ডেটা weatherData স্টেটে সেট করুন
    } catch (error) {
      // কোনো নেটওয়ার্ক বা ফেচিং ত্রুটি হলে
      console.error("আবহাওয়া আনতে ত্রুটি:", error); // কনসোলে ত্রুটি লগ করুন
      setError(error.message); // ত্রুটির বার্তা setError স্টেটে সেট করুন
      setWeatherData(null); // ত্রুটি হলে আবহাওয়ার ডেটা মুছে দিন
    } finally {
      setLoading(false); // লোডিং শেষ, তাই লোডিং স্টেট False করুন
    }
  };

  // ইনপুট ফিল্ডে টাইপ করার সময়
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // inputValue আপডেট করুন
    // ইনপুট ফিল্ডে টাইপ করার সময় নির্বাচিত শহরের স্টেট খালি করে দিন
    // যাতে ড্রপডাউন এবং ইনপুট ফিল্ডের মধ্যে সংঘর্ষ না হয়।
    if (selectedCity !== "") {
      setSelectedCity("");
    }
  };

  // ড্রপডাউন থেকে শহর নির্বাচন করার সময়
  const handleSelectChange = (e) => {
    setSelectedCity(e.target.value); // selectedCity আপডেট করুন
    // ড্রপডাউন থেকে সিলেক্ট করার সময় ইনপুট ফিল্ডের স্টেট খালি করে দিন
    if (inputValue !== "") {
      setInputValue("");
    }
    // ড্রপডাউন থেকে নির্বাচন করার সাথে সাথেই ডেটা ফেচ করুন
    fetchWeatherData(e.target.value);
  };

  // ফর্ম সাবমিট হ্যান্ডেল করার ফাংশন (লিখে সার্চ করার জন্য)
  const handleSubmit = (e) => {
    e.preventDefault(); // ফর্মের ডিফল্ট সাবমিট আচরণ বন্ধ করুন
    fetchWeatherData(inputValue); // ইনপুটের মান ব্যবহার করে আবহাওয়ার ডেটা আনুন
    setInputValue(""); // সাবমিট করার পর ইনপুট ফিল্ড খালি করুন
    setSelectedCity(""); // ইনপুট ফিল্ড দিয়ে সার্চ করলে ড্রপডাউনের সিলেকশন রিসেট
  };

  // কম্পোনেন্ট মাউন্ট হওয়ার সময় (একবার) ডিফল্ট শহরের আবহাওয়া আনার জন্য useEffect
  useEffect(() => {
    // এখন selectedCity স্টেটেই Thakurgaon সেট করা আছে, তাই এটিকে সরাসরি ব্যবহার করা হচ্ছে।
    // এটি নিশ্চিত করবে যে ড্রপডাউন এবং লোড হওয়া ডেটা উভয়ই Thakurgaon দেখাবে।
    fetchWeatherData(selectedCity);
  }, []); // খালি ডিপেন্ডেন্সি অ্যারে মানে এটি শুধুমাত্র একবার চলে

  // লোডিং অবস্থায় স্পিনার প্রদর্শন
  if (loading && !weatherData && !error) {
    // যদি লোড হচ্ছে এবং এখনো কোনো ডেটা বা ত্রুটি না থাকে
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  return (
    <div>
      <div
        className="hero min-h-screen bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/14/da/33/14da33319ec125fb68bd12a9e878c386.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-extrabold leading-tight">
              আপনার হাতের মুঠোয় আবহাওয়ার সঠিক তথ্য!
            </h1>
            <p className="mb-5 text-lg font-light">
              যেকোনো শহরের বর্তমান তাপমাত্রা, বাতাসের গতি, এবং আর্দ্রতা
              instantly জেনে নিন। আপনার দিনটি সঠিকভাবে পরিকল্পনা করতে আমাদের
              অ্যাপ আপনাকে সাহায্য করবে।
            </p>

            <div className="">
              {/* ড্রপডাউন মেনু */}
              <select
                className="select select-accent w-full bg-black"
                onChange={handleSelectChange} // পরিবর্তনের সময় হ্যান্ডলার কল করুন
                value={selectedCity} // নির্বাচিত মানকে স্টেটের সাথে বাঁধুন
              >
                <option value="">শহর নির্বাচন করুন...</option>{" "}
                {/* ডিফল্ট অপশন */}
                <option value="Thakurgaon">ঠাকুরগাঁও</option>{" "}
                {/* ঠাকুরগাঁও অপশন */}
                <option value="Dhaka">ঢাকা</option>
                <option value="Chittagong">চট্টগ্রাম</option>
                <option value="Sylhet">সিলেট</option>
                <option value="Khulna">খুলনা</option>
                <option value="Rajshahi">রাজশাহী</option>
                <option value="London">লন্ডন</option>
                <option value="New York">নিউইয়র্ক</option>
                <option value="Tokyo">টোকিও</option>
                <option value="Paris">প্যারিস</option>
              </select>

              {/* অথবা বিভাজক */}
              <h1 className="text-md font-bold my-2 ">অথবা</h1>

              {/* ইনপুট ফিল্ড এবং বাটন */}
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="এখানে শহরের নাম লিখুন..."
                  className="input input-info bg-transparent w-full"
                  value={inputValue} // কন্ট্রোলড কম্পোনেন্ট
                />
                <button type="submit" className="btn btn-primary w-full mt-3">
                  খুঁজুন
                </button>
              </form>
            </div>

            {/* আবহাওয়ার ডেটা প্রদর্শন */}
            {error && <Error message={error} />}
            {weatherData && (
              <div className="mt-8 p-6 border rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-2">{weatherData.name}</h2>
                {weatherData.main && (
                  <>
                    <p className="text-6xl font-extrabold mb-2">
                      {Math.round(weatherData.main.temp)}°C
                    </p>
                    <p className="text-2xl capitalize">
                      {weatherData.weather[0].description}
                    </p>
                    <div className="flex justify-around mt-4 text-xl">
                      <p>আর্দ্রতা: {weatherData.main.humidity}%</p>
                      <p>বাতাস: {weatherData.wind.speed} মি/সে</p>
                    </div>
                  </>
                )}
              </div>
            )}
            {/* নতুন সার্চ চলাকালীন লোডিং স্পিনার */}
            {loading && weatherData && (
              <div className="mt-4">
                <span className="loading loading-spinner text-warning"></span>
              </div>
            )}
          </div>
        </div>
      </div>
      <Move/>
    </div>
  );
}

export default Weather;
