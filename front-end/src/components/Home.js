import React from "react";
import { COLORS } from "../constants";
import styled from "styled-components";
import Logo from "../assets/food.png";
const Home = () => {
  return (
    <Wrapper>
      <Layout>
        <Title>
          <h1>Find a Recipe</h1>
        </Title>
        <Search>
          <SearchBar type="text" />
        </Search>
      </Layout>
      <Main>Find all the recipes you need</Main>
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
margin-top:0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${COLORS.third};
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height:150px;
  margin-bottom:50px;
`;
const Title = styled.div`
color:white;
`;
const Search = styled.div``;
const SearchBar = styled.input`
  width: 500px;
  height: 35px;
  border-radius: 15px;
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  min-height: 60vh;
  min-width: 80vw;
  margin-bottom: 200px;
`;
const Image = styled.img`
  width: 500px;
  height: 300px;
`;

const Category = styled.div``;

export default Home;
