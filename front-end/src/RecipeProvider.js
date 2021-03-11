import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import { RecipeContext } from "./RecipeContext";

export const RecipeProvider = ({ children }) => {
  // ProfileInfo of Current user (treasurymog)
  // const profileInfo = async () => {
  //     try {
  //       const response = await fetch(`/api/me/profile`)
  //         .then((data) => data.json())
  //         .then((data) => data.profile);
  //       setCurrentUser(response);
  //       setMainUserHandle(response.handle);
  //     } catch (err) {
  //       setStatus("error");
  //     }
  //   };

  const [data, setData] = useState();
  const profileInfo = async () => {
    try {
      const response = await fetch("/recipes/random")
        .then((res) => res.json())
        .then((data) => data.data);

      console.log(response);
      setData(response);
      return response;
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {

      profileInfo();

    
  }, []);
  console.log(data);
  return (
    <RecipeContext.Provider value={{ data }}>{children}</RecipeContext.Provider>
  );
};
