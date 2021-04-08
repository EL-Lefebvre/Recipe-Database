import React from "react";

import Filter from "./Filter";
const Cuisine = ({ subStatus, cuisine, setCuisine, list, setCuisineList }) => {
  return (
    <Filter
        subStatus={subStatus}
      list={list}
      setList={setCuisineList}
      state={cuisine}
      setState={setCuisine}
    />
  );
};

export default Cuisine;
