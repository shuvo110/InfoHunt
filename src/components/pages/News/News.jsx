import React, { useEffect, useState } from "react";
import NewsCardOne from "./NewsCardOne";
import Error from "../Error";

function News() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("top");
  const [lastUpdated, setLastUpdated] = useState("");

  const fetchNews = async (query = "Bangladesh") => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(
        `https://newsdata.io/api/1/latest?apikey=pub_c91a2762ba0b44e7aaef5bf47c2943e0&q=${query}&category=${category}&language=bn`
      );
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        setArticles([]);
        setError("কোনো খবর পাওয়া যায়নি। অনুগ্রহ করে সঠিক এলাকা লিখুন।");
      } else {
        setArticles(data.results);
        setLastUpdated(new Date().toLocaleString("bn-BD"));
      }
    } catch (err) {
      setError("নিউজ লোড করতে সমস্যা হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(); // initial load
  }, [category]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.trim()) {
      alert(`আপনি "${location}" অঞ্চলের খবর খুঁজছেন`);
      fetchNews(location);
    }
  };

  return (
    <div>
      {/* হেডার এবং সার্চ অংশ */}
      <div className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center px-4">
        <img
          src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab"
          alt="news background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 max-w-3xl w-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
            এখনই জানুন আপনার এলাকার সর্বশেষ সংবাদ
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 px-2 sm:px-6 text-gray-100">
            স্থানীয় ঘটনা, ব্রেকিং নিউজ, রাজনৈতিক বিশ্লেষণ – সব এক ক্লিকে আপনার
            কাছে।
          </p>
          <p className="text-sm sm:text-base mb-6 px-4 sm:px-8 text-gray-200 italic">
            বিশ্ব বদলে যাচ্ছে প্রতিনিয়ত — আপনি থাকুন এক ধাপ এগিয়ে। নিজের এলাকার
            নাম লিখুন ও খবর পেয়ে যান সাথে সাথে।
          </p>

          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-4"
          >
            <input
              type="text"
              placeholder="যেমন: ঢাকা, কক্সবাজার, খুলনা.."
              className="input input-accent bg-white text-black w-full sm:w-2/3 px-4 py-2 rounded-md"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold transition w-full sm:w-auto">
              খোঁজ করুন
            </button>
          </form>

          {/* ক্যাটেগরি সিলেক্ট */}
          <div className="mt-4">
            <select
              className="px-4 py-2 border rounded-md text-black bg-white"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="top">সর্বশেষ</option>
              <option value="sports">খেলাধুলা</option>
              <option value="business">ব্যবসা</option>
              <option value="entertainment">বিনোদন</option>
              <option value="politics">রাজনীতি</option>
              <option value="world">আন্তর্জাতিক</option>
            </select>
          </div>
        </div>
      </div>

      {/* News Display অংশ */}
      <div className="container m-auto py-10 px-4">
        {/* আপডেট সময় */}
        {lastUpdated && !loading && (
          <p className="text-center text-sm text-gray-500 mb-4">
            সর্বশেষ আপডেট: {lastUpdated}
          </p>
        )}

        {/* লোডিং */}
        {loading && (
          <div className="text-center py-6">
            <span className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-600 border-t-transparent"></span>
            <p className="text-gray-600 mt-2">লোড হচ্ছে...</p>
          </div>
        )}

        {/* এরর */}
        {!loading && error && <Error message={error} />}

        {/* নিউজ কার্ড */}
        {!loading && articles.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4">
            {articles.map((card) => (
              <NewsCardOne key={card.article_id} card={card} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default News;
