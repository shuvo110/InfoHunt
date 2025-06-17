import React, { useEffect, useState } from "react";
import Error from "../Error";
import { AiOutlineDown } from "react-icons/ai";
function Move() {
  const [allMove, setallMove] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countCard, setCountCard] =useState(4);
  const clickBtn = ()=>{
    setCountCard(countCard + 4);
  }
  useEffect(() => {
    const moveJon = async () => {
      try {
        const jos = await fetch("move.json");
        if (!jos.ok) throw new Error("play data chacked");
        const red = await jos.json();
        setallMove(red);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    moveJon();
  }, []);
  if (loading)
    return (
      <h1>
        <span className="loading loading-spinner text-secondary"></span>
      </h1>
    );
  if (error) return <Error />;
  return (
    <div className="container m-auto py-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
        {allMove.slice(0, countCard).map((card) => (
          <div key={card.id} className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src={card.poster} className="max-h-[200px] object-cover p-3 rounded-3xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Title : <span className="font-bold italic">{card.title}</span></h2>
              <p>
               {card.description}
              </p>
              <div className="card-actions ">
                <a href={card.watchLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-secondary w-full">Watch Video</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        countCard<allMove.length && (<button onClick={clickBtn} className="btn btn-outline btn-accent mt-6 w-full">See More  <AiOutlineDown/></button>)
      }
    </div>
  );
}

export default Move;
