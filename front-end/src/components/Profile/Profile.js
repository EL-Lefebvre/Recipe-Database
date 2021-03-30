import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import Logo from "../../assets/food.png";
import { RecipeContext } from "../../RecipeContext";
const Profile = () => {
  return (
    <Wrapper>
      <Layout>
        <Title>
          <h1>Profile</h1>
        </Title>
        <LinkList>
          <Item>
            <Link href="/register">Sign Up</Link>
          </Item>
          <Item>
            <Link href="/login">Login</Link>
          </Item>
          {/* <Item>
            <Link href="/">Logout</Link>
          </Item> */}
        </LinkList>
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
const Title = styled.div`
  color: white;
  text-decoration: underline;
`;
const LinkList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
  color: white;
`;
const Item = styled.li`
  padding-right: 20px;
`;
const Link = styled.a`
  text-decoration: none;
  &:visited {
    color: white;
  }
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

export default Profile;
