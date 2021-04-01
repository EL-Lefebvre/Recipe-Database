import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { AiOutlineCheck as CheckMark } from "react-icons/ai";

import Liked from "./Liked";
import { RecipeContext } from "../../RecipeContext";
const BigRecipe = ({ individualData }) => {
  const {
    recipeLiked,
    setRecipeLiked,
    toggleLiked,
    setToggleLiked,
  } = useContext(RecipeContext);

  useEffect(() => {
    if (toggleLiked) {
      localStorage.setItem("favorites", JSON.stringify(recipeLiked));
    }
  }, [toggleLiked]);
const handleClickLike = () => {
  setToggleLiked(!toggleLiked);
  // if (toggleLiked) {
  //   setRecipeLiked([...recipeLiked, recipeId]);
  //   localStorage.setItem("favorites", JSON.stringify(recipeLiked));
  // } else if (!toggleLiked) {
  //   const index = recipeLiked.indexOf(recipeId);
  //   if (index > -1) {
  //     recipeLiked.splice(index, 1);
  //   }
  //   setRecipeLiked([...recipeLiked]);
  // }
};

const favorites = JSON.parse(localStorage.getItem("favorites"));
console.log(recipeLiked);
console.log(favorites);
  return (
    <Wrapper>
      {individualData && (
        <Main key={individualData.id}>
          <Layout>
            <Image src={individualData.image} />
            <Category>
              {individualData.diets &&
                individualData.diets.map((diet) => {
                  return (
                    <DietWrapper>
                      <Diet>{diet}</Diet>

                      <CheckMark size={20} fill={COLORS.primary} />
                    </DietWrapper>
                  );
                })}
            </Category>
          </Layout>
          <Description>
            <Title>
              <h3>{individualData.title}</h3>
              <Liked
                recipeId={individualData.id}
                handleClickLike={handleClickLike}
                toggleLiked={toggleLiked}
                recipeLiked={recipeLiked}
                setRecipeLiked={setRecipeLiked}
                setToggleLiked={setToggleLiked}
              />
    
            </Title>
            <Name>Ingredients</Name>
            <Ingredients>
              {individualData.extendedIngredients.map((instruction) => {
                return <div>- {instruction.original}</div>;
              })}
            </Ingredients>
            {individualData.instructions ? (
              <Instructions
                dangerouslySetInnerHTML={{
                  __html: individualData.instructions,
                }}
              />
            ) : (
              <Instructions
                dangerouslySetInnerHTML={{ __html: individualData.summary }}
              />
            )}
          </Description>
        </Main>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 60vw;
  letter-spacing: 3px;
  @media (max-width: 768px) and (max-height: 900px) {
    min-height: 100vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    min-height: 100vh;
  }
`;
const Main = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) and (max-height: 900px) {
    flex-direction: column;
    align-items: space-evenly;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    flex-direction: column;
  }
`;
const Layout = styled.div`
  height: 400px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 3px double ${COLORS.primary};
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  min-height: 400px;

  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 85vw;
    margin-top: -30px;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 85vw;
    margin-top: -30px;
  }
`;

const Description = styled.div`
  width: 50vw;
  background-color: white;
  padding: 10px;
  margin-bottom: 30px;
  @media (max-width: 768px) and (max-height: 900px) {
    border-top: 1px solid black;
    padding-top: 15px;
    margin-top: 50px;
    padding-bottom: 15px;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    margin-top: 50px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;
const Name = styled.h2`
  text-decoration: underline;
`;
const Ingredients = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  padding-left: 20px;
`;
const Instructions = styled.div`
  line-height: 1.7;
`;

const Category = styled.div`
  display: flex;
  justify-content: flex-start;
  border-radius: 20px;
  background-color: white;
  flex-wrap: wrap;
  height: 800px;
  max-width: 500px;
`;
const DietWrapper = styled.div`
  width: 250px;
  height: 40px;

  justify-content: center;
  display: flex;
  align-items: center;
`;
const Diet = styled.h5``;
const Image = styled.img`
  max-height: 300px;
  border-radius: 20px;
  padding: 10px;
`;
const Title = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${COLORS.primary};

  border-radius: 15px;
  border: 3px double ${COLORS.primary};
  height: 40px;
  padding: 15px;
`;
export default BigRecipe;
