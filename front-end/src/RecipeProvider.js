import React, { useEffect, useState, useContext } from "react";

import {
  intolerancesData,
  dietsData,
  cuisinesData,
  typeData,
} from "./components/Search/Utilities";
import { RecipeContext } from "./RecipeContext";


const initialFitlerData = {
  cuisine: [...cuisinesData].map(({ name }, id) => ({
    id,
    label: name,
    selected: false,
  })),
  type: typeData.map(({ name }, id) => ({
    id,
    label: name,
    selected: false,
  })),
  intolerances: intolerancesData.map(({ name }, id) => ({
    id,
    label: name,
    selected: false,
  })),
  diet: dietsData.map(({ name }, id) => ({
    id,
    label: name,
    selected: false,
  })),
};

export const RecipeProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState();
  const [currentUser, setCurrentUser] = useState("");
  const [registeredUserName, setRegisteredUserName] = useState("");
  const [registeredPassword, setRegisteredPassword] = useState("");
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [recipeLiked, setRecipeLiked] = useState([]);
  const [toggleLiked, setToggleLiked] = useState(false);
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("");
  const [cuisineList, setCuisineList] = useState([...initialFitlerData.cuisine]);
  const [typeList, setTypeList] = useState(initialFitlerData.type);
  const [dietList, setDietList] = useState(initialFitlerData.diet);
  const [intoleranceList, setIntoleranceList] = useState(
    initialFitlerData.intolerances
  );
  const [selectedItems, setSelectedItems] = useState({
    cuisine: [],
    type: [],
    intolerances: [],
    diet: [],
  });
  //Get current User
  const getUser = async () => {
    try {
      const response = await fetch("/user", {
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/user",
      })
        .then((res) => res.json())
        .then((res) => res.username);
      console.log(response.username);
      const user = response.username;
      // let currentData = localStorage.getItem("data");
      if (user) {
        setCurrentUser(user);
      }
    } catch (err) {
      console.log("no user");
    }
  };

  //Get favorites from user

  //reset all filters
  const resetFilters = () => {
    setCuisineList(cuisineList.map(data => ({...data, selected: false})));
    setTypeList(typeList.map(data => ({...data, selected: false})));
    setDietList(dietList.map(data => ({...data, selected: false})));
    setIntoleranceList(intoleranceList.map(data => ({...data, selected: false})));
  };

  //Get all posted recipes in blog
  const postedRecipe = async () => {
    try {
      const response = await fetch(`/recipes/post`)
        .then((res) => res.json())
        .then((data) => data.data);

      setResults(response);
      return response;
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    postedRecipe();
    setStatus("loaded");
  }, []);

  // -----

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

console.log(dietList);

const handleVegan = (ev) => {
  const copiedList = dietList;
  const found = copiedList.find((element) => element.label === "Vegan");
  if (found) {
    const newItem = { id: found.id, label: "Vegan", selected: true };
    console.log(found.id);
    const newList = copiedList.splice(0, 10, newItem);
    console.log(newList);
    setDietList(newList);
  }
};
  
  useEffect(() => {
    console.log({ cuisineList, typeList, dietList, intoleranceList });
  }, [dietList]);
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
        registeredUserName,
        setRegisteredUserName,
        registeredPassword,
        setRegisteredPassword,
        loginUserName,
        setLoginUserName,
        loginPassword,
        setLoginPassword,
        currentUser,
        setCurrentUser,
        recipeLiked,
        setRecipeLiked,
        toggleLiked,
        setToggleLiked,
        status,
        setStatus,
        results,
        setResults,
        getUser,
        resetFilters,
        handleVegan,
        selectedItems,
        setSelectedItems,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
