import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext<{
  restaurants: any;
  setRestaurants: any;
  addRestaurants: (restaurant: any) => void;
}>({ restaurants: [], setRestaurants: null, addRestaurants: () => null });

interface RestaurantsContextsProps {
  children: any;
}

export const RestaurantsContextProvider: React.FC<RestaurantsContextsProps> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<any>([]);
  const addRestaurants = (restaurant: any) => {
    setRestaurants([...restaurants, restaurant]);
  };
  return (
    <RestaurantsContext.Provider
      value={{ restaurants, setRestaurants, addRestaurants }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
