import React from "react";
import { RiFileVideoFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function SingleCard({ card }) {
  const { strMeal, strMealThumb, strInstructions, strYoutube ,idMeal} = card;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src={strMealThumb}
            alt="Shoes"
            className="max-w-[300px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title: {strMeal.slice(0,20)}...</h2>
          <p>
            {strInstructions.slice(0,100)}....
          </p>
          <div className="card-actions justify-between mt-5">
            <a className="btn btn-primary" href={strYoutube} target="_blank" rel="noopener noreferrer">Video <RiFileVideoFill/></a>
            <Link to={`/routsCard/${idMeal}`} className="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
