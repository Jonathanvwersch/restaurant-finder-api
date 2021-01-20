import React from "react";

interface StarRatingProps {
  rating: any;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<i className="fas fa-star-half-alt text-warning"></i>);
    } else {
      stars.push(<i className="far fa-star text-warning"></i>);
    }
  }
  return <>{stars}</>;
};
