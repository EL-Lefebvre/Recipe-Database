import React from "react";

import Filter from "./Filter";
const Cuisine = ({ cuisine, setCuisine, list, setCuisineList }) => {
  return (
    <Filter
      list={list}
      setList={setCuisineList}
      state={cuisine}
      setState={setCuisine}
    />
  );
};

export default Cuisine;
