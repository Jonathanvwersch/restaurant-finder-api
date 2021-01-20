import React, { useState } from "react";

interface AddRestaurantProps {}

export const AddRestaurant: React.FC<AddRestaurantProps> = ({}) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  return (
    <div className="mb-4">
      <form>
        <div className="form-row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Location"
            />
          </div>
          <div className="col">
            <select className="custom-select" id="inputGroupSelect02">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};
