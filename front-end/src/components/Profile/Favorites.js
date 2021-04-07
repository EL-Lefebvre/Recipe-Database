import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import Logo from "../../assets/food.png";
import SmallRecipe from "../Recipes/SmallRecipe";
import { RecipeContext } from "../../RecipeContext";
const Favorites = ({ favorites, setFavorites }) => {
  const { currentUser, setCurrentUser } = useContext(RecipeContext);

  ///Importing posts from users
  console.log(currentUser);
  console.log(favorites);
  return (
    <Wrapper>
        
  
  
        <Main>
       
   
 {favorites &&
          <SmallRecipe data={favorites}   />
 }
        </Main>
   
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f0f0e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 50px;
`;
const Title = styled.div`
margin-top:-40px;
`;

const MainDiv = styled.div``;

const Main = styled.div`
z-index: 1;
`;
const Image = styled.img`
  width: 500px;
  height: 300px;
`;

const Category = styled.div``;

export default Favorites;
