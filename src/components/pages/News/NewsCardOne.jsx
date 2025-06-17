import React from "react";

function NewsCardOne({ card }) {
  const { image_url, title, link } = card;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title :<span className="text-green-500">{title}</span></h2>
          <p>{card.description}</p>
          <div className="card-actions justify-end">
            <a
              className="btn btn-primary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              বিস্তারিত দেখুন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCardOne;
