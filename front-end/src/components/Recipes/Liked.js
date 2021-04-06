import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Action from "./Action";
import Heart from "./HeartButton/Heart";
const Liked = ({
  recipeId,
  toggleLiked,
  recipeLiked,
  setRecipeLiked,
  setToggleLiked,
  handleClickLike,
  currentUser,
}) => {
  useEffect(() => {
    setToggleLiked(false);
    console.log(currentUser);
  }, []);

  console.log(recipeId);
  useEffect(() => {
    if (toggleLiked && currentUser) {
      const filteredRecipe = recipeLiked.filter((recipe) => recipe != recipeId);
      console.log(filteredRecipe);
      setRecipeLiked([...filteredRecipe, recipeId]);
      localStorage.setItem("favorites", JSON.stringify(recipeLiked));
    } else if (!toggleLiked && currentUser) {
      const index = recipeLiked.indexOf(recipeId);
      if (index > -1) {
        recipeLiked.splice(index, 1);
      }
      setRecipeLiked([...recipeLiked]);
    } else if (!currentUser) {
    }
  }, [toggleLiked]);

useEffect(() => {
  if (toggleLiked) {
    fetch("/user/favorites", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: currentUser,
        recipeId: recipeId,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 201) {
          console.log(json);
        } else {
          console.log("error qwerty");
        }
      })
      .catch((err) => {
        console.error("err");
      });
  }
}, [toggleLiked]);
  return (
    <Wrapper>
      <Action color="rgb(224, 36, 94)" onClick={handleClickLike} size={40}>
        <Heart color="rgb(224, 36, 94)" size={35} toggleLiked={toggleLiked} />
      </Action>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default Liked;
