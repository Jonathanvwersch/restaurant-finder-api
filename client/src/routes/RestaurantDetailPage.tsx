import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { AddReview } from "../components/AddReview";
import { Reviews } from "../components/Reviews";
import { RestaurantsContext } from "../contexts/RestaurantsContexts";

interface RestaurantDetailPageProps {}

export const RestaurantDetailPage: React.FC<RestaurantDetailPageProps> = ({}) => {
  const { id } = useParams<any>();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );
  useEffect(() => {
    (async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center display-1">
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
            <AddReview />
          </div>
        </>
      )}
    </div>
  );
};
