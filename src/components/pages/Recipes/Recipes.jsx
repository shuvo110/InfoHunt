import React, { useEffect, useState } from "react";
import Error from "../Error";
import SingleCard from "./SingleCard";

function RecipesHeroVideo() {
  const [inputValue, setInputValue] = useState("");
  const [allData, setAllDaata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTarget, setSEarchTarget] = useState(false);

  // ✅ Component লোড হলে localStorage থেকে আগের ডেটা আনবে
  useEffect(() => {
    const savedResults = localStorage.getItem("searchResults");
    const savedQuery = localStorage.getItem("searchQuery");

    if (savedResults) {
      setAllDaata(JSON.parse(savedResults));
      setInputValue(savedQuery || "");
      setSEarchTarget(true); // আগের রেজাল্ট দেখাতে চাইলে true করো
    }
  }, []);

  const dataFe = async () => {
    setLoading(true); // এখানে নিয়ে এলে future-proof হবে
    try {
      const fe = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
      );
      if (!fe.ok) throw new Error("API call failed");
      const reFi = await fe.json();
      setAllDaata(reFi.meals || []);
      localStorage.setItem("searchResults", JSON.stringify(reFi.meals || []));
      localStorage.setItem("searchQuery", inputValue);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const subMitBtn = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      alert("রেসিপি খুঁজে নিন ");
      return;
    }
    setSEarchTarget(true);
    dataFe();
  };
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/99/2a/08/992a0851688f9f78bbb49a59bfc42ec2.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              স্বাদের জগতে আপনাকে স্বাগতম!
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200">
              আমাদের অসাধারণ রেসিপি সংগ্রহ থেকে খুঁজে নিন আপনার পছন্দের খাবার।
              প্রাতঃরাশ থেকে শুরু করে রাতের ডিনার, স্বাস্থ্যকর খাবার থেকে শুরু
              করে মজাদার মিষ্টি — সব কিছু এক জায়গায়!
            </p>
            <form
              onSubmit={subMitBtn}
              className="flex items-center justify-center gap-3"
            >
              <input
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                type="text"
                placeholder="রেসিপি খুঁজে নিন"
                className="input input-accent bg-transparent"
              />
              <button className="btn btn-soft btn-accent">রেসিপি দেখুন</button>
            </form>
          </div>
        </div>
      </div>
      {loading && (
        <p className="text-center mt-4 text-yellow-200">রেসিপি লোড হচ্ছে...</p>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 container m-auto py-10">
        {allData.map((card) => (
          <SingleCard key={card.idMeal} card={card}></SingleCard>
        ))}
      </div>
      {searchTarget && !loading && allData.length === 0 && inputValue && (
        <p className="text-red-300 mt-4 text-center">কোন রেসিপি পাওয়া যায়নি!</p>
      )}
      {error && <Error />}
    </div>
  );
}

export default RecipesHeroVideo;
