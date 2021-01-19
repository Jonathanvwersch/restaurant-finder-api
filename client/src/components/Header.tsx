import React from "react";

interface headerProps {}

export const Header: React.FC<headerProps> = ({}) => {
  return (
    <h1 className="font-weight-light display-1 text-center">
      Restaurant Finder
    </h1>
  );
};
