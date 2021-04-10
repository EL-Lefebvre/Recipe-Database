import React from "react";
import { COLORS } from "../constants";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <Title>@2021 Spoonful Search,inc - [ All rights reserved ]</Title>
        
        </Item>
        <Item>
          <Title>About</Title>
        </Item>
        <Item>
          <Title>Privacy</Title>
        </Item>
        <Item>
          <Title>Terms</Title>
        </Item>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS.third};
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  height: 100px;
  font-size: 80%;
  color: ${COLORS.primary};
  @media (max-width: 800px) {

    height: 30vh;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom:10px;
  }

`;
const Item = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-right: 5px;
  @media (max-width: 800px) {

    margin-bottom:10px;
  }
`;
const Title = styled.p``;
export default Footer;
