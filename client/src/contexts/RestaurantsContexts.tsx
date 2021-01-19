import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext<any>({});

interface RestaurantsContextsProps {
  children: any;
}

export const RestaurantsContextProvider: React.FC<RestaurantsContextsProps> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState([]);
  return (
    <RestaurantsContext.Provider value={{ restaurants, setRestaurants }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
