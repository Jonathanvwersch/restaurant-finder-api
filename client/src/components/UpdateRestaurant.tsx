import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

interface UpdateRestaurantProps {}

export const UpdateRestaurant: React.FC<UpdateRestaurantProps> = ({}) => {
  const { id } = useParams<any>();
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");
  let history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setName(response.data.data.restaurant.name);
        setLocation(response.data.data.restaurant.location);
        setPriceRange(response.data.data.restaurant.price_range);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name: name,
      location: location,
      price_range: priceRange,
    });
    history.push("/");
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price-range">Price range</label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            id="price-range"
            type="number"
            className="form-control"
            min="0"
            max="5"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
