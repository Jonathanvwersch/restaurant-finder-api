import React from "react";
import { AddRestaurant } from "../components/AddRestaurant";
import { Header } from "../components/Header";
import { RestaurantList } from "../components/RestaurantList";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </div>
  );
};
