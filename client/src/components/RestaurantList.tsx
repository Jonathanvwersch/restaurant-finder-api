import { spawn } from "child_process";
import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../contexts/RestaurantsContexts";
import { StarRating } from "./StarRating";

interface RestaurantListProps {}

export const RestaurantList: React.FC<RestaurantListProps> = ({}) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let history = useHistory();
  console.log(restaurants);
  useEffect(() => {
    (async function () {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleDelete = async (e: any, id: number) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant: any) => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e: any, id: number) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id: number) => {
    history.push(`restaurants/${id}`);
  };

  const renderRating = (restaurant: any) => {
    if (!restaurant.count) {
      return <span className="text-warning">0 reviews</span>;
    } else {
      return (
        <>
          <StarRating rating={restaurant.average_rating} />
          <span className="text-warning ml-1">({restaurant.count})</span>
        </>
      );
    }
  };

  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant: any) => {
              return (
                <tr
                  onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={restaurant.id}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>{renderRating(restaurant)}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, restaurant.id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, restaurant.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
