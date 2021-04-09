import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../constants";
import styled from "styled-components";
import SmallRecipe from "./Recipes/SmallRecipe";
import { RecipeContext } from "../RecipeContext";
import SearchBar from "./Search";
import Categories from "./Search/Categories";

const Home = () => {
  const { data } = useContext(RecipeContext);

  return (
    <Wrapper>
      <IndividualRecipe>
          <Layout>
            <Title>
              <h2>Find all the recipes you need</h2>
            </Title>

            <Search>
              <SearchBar />
            </Search>
          </Layout>
          <CategoryDiv>
            <Categories />
          </CategoryDiv>
      </IndividualRecipe>
      <Main>
        <Recipes>{data && <SmallRecipe data={data} />}</Recipes>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: -40px;
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
  margin-bottom: 50px;
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 85vw;
    
    z-index: 4;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 85vw;
  padding-bottom:50px;
    z-index: 4;
  }
`;
const Title = styled.div`
  color: white;
`;
const Search = styled.div`
  height: 150px;
  width: 500px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 60vh;
  min-width: 80vw;
  margin-bottom: 200px;
  margin-top: 100px;
  @media (max-width: 768px) and (max-height: 900px) {
    margin-top: 0px;
  }
  @media (max-width: 650px) and (max-height: 850px) {
  }
`;
const CategoryDiv = styled.div``;
const Recipes = styled.div`
  display: flex;
  flex-direction: column;

`;
const IndividualRecipe = styled.div`
 
`;
const Category = styled.div``;

export default Home;

