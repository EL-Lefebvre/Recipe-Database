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
  const [recipeFavorite, setRecipeFavorite] = useState([]);
  const [status, setStatus] = useState("");
  const [posts, setPosts] = useState([]);
  const [cuisineList, setCuisineList] = useState([
    ...initialFitlerData.cuisine,
  ]);
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
        .then((res) => {
          return res;
        })
        .then((res) => res.username);
      const user = response.username;
      if (user) {
        setCurrentUser(user);
      }
    } catch (err) {
      console.log("no user");
    }
  };

  //Get data from user//
  const getUserData = async () => {
    return fetch(`/favorites/${currentUser}`, {
      method: "GET",
      withCredentials: true,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.data) {
          const newArray = res.data.map((recipe) => recipe.id);

          setRecipeLiked(newArray);
        }
      });
  };
  //Get favorites from current user//

  //reset all filters
  const resetFilters = () => {
    setCuisineList(cuisineList.map((data) => ({ ...data, selected: false })));
    setTypeList(typeList.map((data) => ({ ...data, selected: false })));
    setDietList(dietList.map((data) => ({ ...data, selected: false })));
    setIntoleranceList(
      intoleranceList.map((data) => ({ ...data, selected: false }))
    );
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
  useEffect(() => {
    postedRecipe();
    setStatus("loaded");
  }, [posts]);
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

  //Handles for Filter
  const handleVegan = (ev) => {
    const copiedList = dietList;

    copiedList.find((element) => element.label === "Vegan").selected = true;
    setDietList(copiedList);
  };

  const handleAppetizer = () => {
    const copiedList = typeList;
    copiedList.find((element) => element.label === "Appetizer").selected = true;
    setTypeList(copiedList);
  };
  const handleDessert = () => {
    const copiedList = typeList;
    copiedList.find((element) => element.label === "Dessert").selected = true;
    console.log(copiedList);
  };
  const handleFrench = () => {
    const copiedList = cuisineList;
    copiedList.find((element) => element.label === "French").selected = true;
    setCuisineList([copiedList]);
  };

  useEffect(() => {
    if (currentUser) {
      getUserData();
    }
  }, [currentUser]);
  useEffect(() => {
    const newUser = localStorage.getItem("data");
    if (newUser) {
      setCurrentUser(newUser);
    } else {
      localStorage.removeItem("data");
    }
  }, []);
  const addNewPost = (post) => {
    setPosts([{ ...post }, ...posts]);
  };

  return (
    <RecipeContext.Provider
      value={{
        data,
        posts,
        setPosts,
        addNewPost,
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
        recipeFavorite,
        setRecipeFavorite,
        handleFrench,
        handleAppetizer,
        handleDessert,
        selectedItems,
        setSelectedItems,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
