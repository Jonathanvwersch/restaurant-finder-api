import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext<{
  restaurants: any;
  setRestaurants: any;
  addRestaurants: (restaurant: any) => void;
  selectedRestaurant: any;
  setSelectedRestaurant: any;
}>({
  restaurants: [],
  setRestaurants: null,
  addRestaurants: () => null,
  selectedRestaurant: [],
  setSelectedRestaurant: null,
});

interface RestaurantsContextsProps {
  children: any;
}

export const RestaurantsContextProvider: React.FC<RestaurantsContextsProps> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<any>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);

  const addRestaurants = (restaurant: any) => {
    setRestaurants([...restaurants, restaurant]);
  };
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurants,
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
