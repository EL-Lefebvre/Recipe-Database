import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants";
// import { RecipeContext } from "../../RecipeContext";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const SmallRecipe = ({ data }) => {
  const history = useHistory();
  console.log(data);
  return (
    <Wrapper>
      {data &&
        data.map((recipe) => {
          if (!recipe.image) {
            return false;
          }
          return (
            <Main
              key={recipe.id}
              onClick={(e) => {
                history.replace(`recipe/${recipe.id}`);
              }}
            >
              <Title>{recipe.title}</Title>
              <Image src={recipe.image} />
            </Main>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  margin: 10px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: auto;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
  width: 5/90vh;
  &:hover {
    cursor: pointer;
    background-color: ${COLORS.primary};
  }
`;
const Layout = styled.div``;
const Image = styled.img`
  height: 120px;
  width: 15vw;
  padding: 10px;
  padding-top:20px;
`;
const Title = styled.div`
  max-width: 15vw;
  max-height: 5vh;
  text-align: center;
`;
export default SmallRecipe;

/// analyzedInstructions(steps) [array]
//dishTypes
//Title
