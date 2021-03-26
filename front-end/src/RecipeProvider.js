import React, { useEffect, useState, useContext } from "react";
// import { useParams, useHistory } from "react-router-dom";
import {
  intolerancesData,
  dietsData,
  cuisinesData,
  typeData,
} from "./components/Search/Utilities";
import { RecipeContext } from "./RecipeContext";

export const RecipeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState();
  const [individualData, setIndividualData] = useState();

  const [cuisineList, setCuisineList] = useState(
    cuisinesData.map(({ name }, id) => ({
      id,
      label: name,
      selected: false,
    }))
  );
  const [typeList, setTypeList] = useState(
    typeData.map(({ name }, id) => ({
      id,
      label: name,
      selected: false,
    }))
  );
  const [dietList, setDietList] = useState(
    dietsData.map(({ name }, id) => ({
      id,
      label: name,
      selected: false,
    }))
  );

  const [intoleranceList, setIntoleranceList] = useState(
    intolerancesData.map(({ name }, id) => ({
      id,
      label: name,
      selected: false,
    }))
  );

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
    <RecipeContext.Provider
      value={{
        data,
        toggle,
        setToggle,
        cuisineList,
        setCuisineList,
        typeList,
        setTypeList,
        dietList,
        setDietList,
        intoleranceList,
        setIntoleranceList,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
