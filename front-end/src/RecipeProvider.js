import React, { useEffect, useState, useContext } from "react";
// import { useParams, useHistory } from "react-router-dom";

import { RecipeContext } from "./RecipeContext";

export const RecipeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState();
const [individualData, setIndividualData] = useState();

  const randomRecipe = async () => {
    try {
      const response = await fetch("/recipes/random")
        .then((res) => res.json())
        .then((data) => data.data)
        .then((data) => data.recipes);
 
      setData(response);
      return response;
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    randomRecipe();
  }, []);
 



  return (
    <RecipeContext.Provider value={{ data, toggle, setToggle }}>{children}</RecipeContext.Provider>
  );
};
