import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const DropDown = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <Text href="http://localhost:3000/register">Register</Text>
        </Item>
        <Item>
          <Text href="http://localhost:3000/login">Login</Text>
        </Item>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  background-color: ${COLORS.primary};
  color: white;
  width: 10vw;
  height: 15vh;
  display: flex;
  margin-right: 90px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: 800px) and (max-height: 1024px) {
    width: 25vw;
    margin-right: 2rem;
    height: 8vh;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    width: 80vw;
    justify-content: center;
    height: 10vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 80vw;
    height: 10vh;
    justify-content: center;
  }
`;

const Main = styled.div``;
const List = styled.ul`
  margin-left: -30px;
  padding-right: 10px;
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  justify-content: center;
  @media (max-width: 800px) and (max-height: 1024px) {
    width: 50vw;
    height: 8vh;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    width: 80vw;
    height: 10vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 80vw;
    height: 10vh;
  }
`;
const Item = styled.li`
  background-color: ${COLORS.primary};

  border-bottom: 1px double white;
  @media (max-width: 800px) and (max-height: 1024px) {
    border-bottom: none;
  }
  @media (max-width: 768px) and (max-height: 900px) {
  }
  @media (max-width: 650px) and (max-height: 850px) {
  }
`;

const Text = styled.a`
  font-weight: bolder;
  text-decoration: none;
  color: white;
  &:visited {
    color: white;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export default DropDown;
