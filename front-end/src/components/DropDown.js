import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { COLORS } from "../constants";

import { RecipeContext } from "../RecipeContext";

const DropDown = ({ toggleProfile, setToggleProfile }) => {
  const { currentUser, setCurrentUser } = useContext(RecipeContext);

  useEffect(() => {}, []);
  return (
    <Wrapper>
      <Main>
        <List>
          <Item>
            <Text href="http://localhost:3000/register">Register</Text>
          </Item>
          <Item>
            <Text href="http://localhost:3000/login">Login</Text>
          </Item>
        </List>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  background-color: white;
  color: white;
  width: 100px;
  height: 60px;
  display: flex;
  margin-right: 90px;

  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Main = styled.div``;
const List = styled.ul`
  margin-left: -30px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Item = styled.li`
  background-color: white;
`;

const Text = styled.a`
  font-weight: bolder;
  text-decoration: none;
  color: ${COLORS.primary};
  &:visited {
    color: ${COLORS.primary};
  }
  &:hover {
    text-decoration: underline;
  }
`;

export default DropDown;
