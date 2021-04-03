import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import Logo from "../../assets/food.png";
import Posts from "../Blog/Posts";
import { RecipeContext } from "../../RecipeContext";
const ProfileBar = () => {
  const { individualData, setIndividualData } = useContext(RecipeContext);
  const [posts, setPosts] = useState([]);
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("null");
  console.log(individualData);

  return (
    <Wrapper>
      <Layout>
        <Item>
          <Link>Posted</Link>
        </Item>
        <Item>
          <Link>Favorites</Link>
        </Item>

        <Item>
          <Link href="http://localhost:3000/logout">Logout</Link>
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
  width: 300px;
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
`;

export default ProfileBar;