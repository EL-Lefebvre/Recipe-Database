import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { AiOutlineCheck as CheckMark } from "react-icons/ai";

import Liked from "./Liked";
import { RecipeContext } from "../../RecipeContext";
const BigRecipe = ({ individualData }) => {
  const { currentUser, recipeLiked, setRecipeLiked } = useContext(
    RecipeContext
  );
  const [toggleLiked, setToggleLiked] = useState(
    recipeLiked.includes(individualData.id)
  );

  useEffect(() => {
    console.log(recipeLiked);
  }, [recipeLiked]);
  const handleClickLike = (ev) => {
    // setRecipeLiked([...recipeLiked, individualData.id])
    setToggleLiked(!toggleLiked);
  };

  console.log(currentUser, recipeLiked);

  return (
    <Wrapper>
      {individualData && (
        <Main key={individualData.id}>
          <Layout>
            <Image src={individualData.image} />
            {individualData.diets ? (
              <Category>
                {individualData.diets.map((diet) => {
                  return (
                    <DietWrapper>
                      <Diet>{diet}</Diet>

                      <CheckMark size={20} fill={COLORS.primary} />
                    </DietWrapper>
                  );
                })}
              </Category>
            ) : (
              <NoResults></NoResults>
            )}
          </Layout>
          <Description>
            <Title>
              <h3>{individualData.title}</h3>
              {currentUser && (
                <Liked
                  recipeId={individualData.id}
                  handleClickLike={handleClickLike}
                  toggleLiked={toggleLiked}
                  recipeLiked={recipeLiked}
                  setRecipeLiked={setRecipeLiked}
                  setToggleLiked={setToggleLiked}
                  currentUser={currentUser}
                />
              )}
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

  @media (max-width: 800px) and (max-height: 1024px) {
  }
  @media (max-width: 768px) and (max-height: 900px) {
  }
  @media (max-width: 650px) and (max-height: 850px) {
  }
`;
const Main = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 800px) and (max-height: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 650px) and (max-height: 850px) {
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
  padding-bottom: 50px;
  @media (max-width: 800px) {
    flex-direction: column;
padding-top:50px;

min-height:40vh;
    max-height: 60vh;
  }
  @media (max-width: 768px)  {
    width: 90vw;
padding-top:20vh;

  }
  @media (max-width: 650px) and (max-height: 850px) {
 min-height:20vh;
 max-height:45vh;
  }
`;

const Description = styled.div`
  width: 50vw;
  background-color: white;
  padding: 10px;
  margin-bottom: 30px;
  @media (max-width: 800px) and (max-height: 1024px) {
    width: 85vw;
  }
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
const NoResults = styled.div`
height:1vh;
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
  height: 10vh;
  width:  60vw;
  max-width: 500px;

  @media (max-width: 800px) and (max-height: 1024px) {
    height: 20vh;
    width:  90vw;
    padding-bottom:20px;
  }
  @media (max-width: 768px) and (max-height: 900px) {
justify-content:center;

  }
  @media (max-width: 650px) {
    margin-bottom:10vh;
    
  }
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
  @media (max-width: 800px) and (max-height: 1024px) {
    width: 60vw;
  }
  @media (max-width: 768px) and (max-height: 900px) {
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 90vw;
  }
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
  height: 10vh;
  max-height: 10vh;
  padding: 15px;
  @media (max-width: 1000px) {
    height: 25vh;
  }
  @media (max-width: 768px) and (max-height: 900px) {
  }
  @media (max-width: 650px) and (max-height: 850px) {
  }
`;
export default BigRecipe;
