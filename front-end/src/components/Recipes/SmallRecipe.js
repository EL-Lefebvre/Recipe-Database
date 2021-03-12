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
  align-items: center;
  background-color: white;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
transition: 0.7s;
  &:hover {
    cursor: pointer;
    background-color: ${COLORS.primary};
  }
`;
const Layout = styled.div``;
const Image = styled.img`
  height: 140px;
  width: 200px;
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
