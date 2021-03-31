import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import Form from "./Form";
const Posts = ({ posts, setPosts }) => {
  useEffect(() => {
    console.log(posts);
  }, []);
  return (
    <Wrapper>
      <Main>
        {posts &&
          posts.map((post) => {
            return <Layout>{post.userName}</Layout>;
          })}
        <h2>this is your recipesss</h2>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
const Layout = styled.div`
  width: 60vw;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  border: 5px double black;
  align-items: center;
  background-color: ${COLORS.third};
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  min-height: 30vh;
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  min-height: 60vh;
  min-width: 80vw;
  margin-bottom: 200px;
`;

const Title = styled.div`
  color: white;
  text-decoration: underline;
`;

const Recipes = styled.div`
  display: flex;
  flex-direction: column;
`;
const IndividualRecipe = styled.div``;
const Category = styled.div``;

export default Posts;
