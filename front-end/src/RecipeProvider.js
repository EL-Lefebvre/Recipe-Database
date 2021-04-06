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
  const [currentUser, setCurrentUser] = useState("");
  const [registeredUserName, setRegisteredUserName] = useState("");
  const [registeredPassword, setRegisteredPassword] = useState("");
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [recipeLiked, setRecipeLiked] = useState([]);
  const [toggleLiked, setToggleLiked] = useState(false);
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("loading");
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
  //Get current User
  useEffect(() => {
    fetch("/user", {
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("data", res.username);
        console.log(res.username);
      });
    let currentData = localStorage.getItem("data");
    setCurrentUser(currentData);
    setStatus('loaded')
  }, [currentUser]);
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
    setStatus("loading");
    console.log(results);
  }, []);
  useEffect(() => {
    if (currentUser) {
      setStatus("idle");
    }
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
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
