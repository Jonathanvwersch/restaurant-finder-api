import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

interface AddReviewProps {}

export const AddReview: React.FC<AddReviewProps> = ({}) => {
  const { id } = useParams<any>();
  const history = useHistory();
  const location = useLocation();
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await RestaurantFinder.post(`/${id}/addReview`, {
        name: name,
        review: review,
        rating: rating,
      });
      history.push("/");
      history.push(location.pathname);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mb-2">
      <form>
        <div className="form-row">
          <div className="form group col-8">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              placeholder="Name"
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="custom-select"
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            value={review}
            onChange={(e) => {
              setReview(e.target.value);
            }}
            id="review"
            className="form-control"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
