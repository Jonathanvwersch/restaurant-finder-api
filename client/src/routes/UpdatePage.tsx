import React from "react";
import { UpdateRestaurant } from "../components/UpdateRestaurant";

interface UpdatePageProps {}

export const UpdatePage: React.FC<UpdatePageProps> = ({}) => {
  return (
    <div>
      <h1 className="text-center mt-5">Update Restaurant</h1>
      <UpdateRestaurant />
    </div>
  );
};
