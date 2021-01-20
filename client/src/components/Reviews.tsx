import React from "react";
import { StarRating } from "./StarRating";

interface ReviewsProps {
  reviews: any;
}

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  console.log(reviews);
  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map((review: any) => {
        return (
          <div
            className="card text-white bg-primary mb-3 mr-4"
            style={{ maxWidth: "20rem", minWidth: "15rem" }}
            key={review.id}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
