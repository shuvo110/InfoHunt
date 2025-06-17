import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RoutsCardSin() {
  const { idMeal } = useParams(); // 👈 URL থেকে idMeal ধরছি
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleMeal = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        if (!res.ok) throw new Error("ডেটা লোড করতে সমস্যা হয়েছে");
        const json = await res.json();
        setData(json.meals[0]); // একটাই meal object আসে
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleMeal();
  }, [idMeal]);
  if (loading)
    return <p className="text-center text-yellow-400">লোড হচ্ছে...</p>;
  if (error) return <p className="text-center text-red-400">{error}</p>;

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${data.strMealThumb})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={data.strMealThumb}
            className="max-w-[300px] lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold bg-green-400/30 p-2 inline-block rounded-md">Title : {data.strMeal}</h1>
            <p className="py-6 text-md bg-black/35 p-4 rounded-md my-2">{data.strInstructions}</p>
            <a
              href={data.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-success "
            >
              ভিডিও দেখুন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoutsCardSin;
