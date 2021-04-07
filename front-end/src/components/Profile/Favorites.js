import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import Logo from "../../assets/food.png";
import SmallRecipe from "../Recipes/SmallRecipe";
import RecipePreview from "../Search/RecipePreview";
import { RecipeContext } from "../../RecipeContext";
const Favorites = ({ favorites, setFavorites }) => {
  const { currentUser, setCurrentUser } = useContext(RecipeContext);

  ///Importing posts from users
  console.log(currentUser);
  console.log(favorites);

  const FilteredFavorites = favorites.map((fav) => {
    const id = fav.id;
    const title = fav.title;
    const image = fav.image;
    return { id, title, image };
  });
  console.log(FilteredFavorites);
  return (
    <Wrapper>
      <Main>   {favorites &&
        FilteredFavorites.map((result, index) => { 
        
          return   <RecipePreview result={result} index={index} />
})}</Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 50px;
`;


const Main = styled.div`
margin-top:-20px;
  z-index: 1;
  width:90vw;
  background-color:white;
`;


export default Favorites;
