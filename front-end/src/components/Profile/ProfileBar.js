import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import Logo from "../../assets/food.png";
import Posts from "../Blog/Posts";
import { RecipeContext } from "../../RecipeContext";
const ProfileBar = ({ itemClicked, setItemClicked }) => {
  const { currentUser, setCurrentUser, setStatus } = useContext(RecipeContext);
  const handleClear = () => {
    localStorage.clear();
    setStatus("delete");
  };
  return (
    <Wrapper>
      <Layout>
        <Item>
          <Link
            onClick={() => {
              setItemClicked("posts");
            }}
          >
            Posted
          </Link>
        </Item>
        <Item>
          <Link
            onClick={() => {
              setItemClicked("favorites");
            }}
          >
            Favorites
          </Link>
        </Item>

        <Item>
          <Link href="http://localhost:3000/logout" onClick={handleClear}>
            Logout
          </Link>
        </Item>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 50vw;
  @media (max-width: 800px) and (max-height: 1024px) {
    width: 60vw;
  }

  @media (max-width: 768px) and (max-height: 900px) {
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 90vw;
    margin-left: 30px;
  }
`;
const Layout = styled.ul`
  width: 300px;
  display: flex;
  margin-left: -30px;
  flex-direction: row;
  justify-content: space-evenly;

  border-radius: 15px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  margin-bottom: 50px;
  @media (max-width: 768px) and (max-height: 900px) {
  }
  @media (max-width: 650px) and (max-height: 850px) {
  }
`;

const MainDiv = styled.div``;

const Item = styled.li``;
const Link = styled.a`
  text-decoration: none;
  &:visited {
    color: black;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default ProfileBar;
