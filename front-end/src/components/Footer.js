import React from "react";
import { COLORS } from "../constants";
import styled from "styled-components";

const Footer = () => {
    return <Wrapper>This is my Footer</Wrapper>;
  };
  
  const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS.third};
  display: flex;
  align-items: center;
  color:white;
  justify-content: center;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  height: 100px;
`;
  export default Footer;