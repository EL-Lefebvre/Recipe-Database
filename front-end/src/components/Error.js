import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../constants";
import styled from "styled-components";
import ErrorLogo from "../assets/error-icon.png";

const Error = () => {
  return (
    <Wrapper>
    
      <Main>
        <Logo src={ErrorLogo} />
      </Main>
      <DivTitle>
        <Title>Something went wrong...</Title>
      </DivTitle>
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

const Main = styled.div``;
const DivTitle = styled.div``;
const Title = styled.h1`
  color: black;
`;

const Logo = styled.img`
  height: 200px;
`;

export default Error;
