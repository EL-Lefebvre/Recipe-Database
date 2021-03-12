import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css";
const BigRecipe = ({ individualData }) => {
  console.log(individualData);
  return (
    <Wrapper>
      {individualData && (
        <Main key={individualData.id}>
          <Layout>
            <Title>
              <h3>{individualData.title}</h3>
            </Title>
            <Image src={individualData.image} />
          </Layout>
          <Description>
            {individualData.extendedIngredients.map((instruction) => {
              return <div>{instruction.original}</div>;
            })}
          </Description>
        </Main>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 60vw;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Layout = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 5px double black;
  align-items: center;
  text-align: center;
  background-color: ${COLORS.third};
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

const Description = styled.div``;
const Image = styled.img`
  max-height: 300px;
  border-radius: 20px;
  padding: 10px;
`;
const Title = styled.div`
  color: white;
  max-width: 40vw;
  background-color: black;
  border-radius: 10px;
`;
export default BigRecipe;

/// analyzedInstructions(steps) [array]
//dishTypes
//Title
