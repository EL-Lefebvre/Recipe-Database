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
      <MainDiv>
        <Main>
   
 
          <SmallRecipe data={favorites}   />
      
        </Main>
      </MainDiv>
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
const Layout = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  border: 5px double black;
  align-items: center;
  background-color: ${COLORS.third};
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 150px;
  width: 500px;
  margin-bottom: 50px;
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 85vw;
    margin-top: -30px;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 85vw;
    margin-top: -30px;
  }
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
