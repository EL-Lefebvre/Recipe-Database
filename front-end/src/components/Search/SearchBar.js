import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Results from "./Results";
import { useHistory } from "react-router-dom";
import { RecipeContext } from "../../RecipeContext";
import { AiOutlineSearch as IconSearch } from "react-icons/ai";
// import { COLORS } from "../../constants";

const SearchBar = ({keyword, setKeyword}) => {



console.log(keyword)
  useEffect(() => {}, []);
  return (

      <TypeheadWrapper>
        <Input
          value={keyword}
          onChange={(ev) => {
            setKeyword(ev.target.value);
          }}
        />
        <IconDiv>
          <MainIcon size={20} />
        </IconDiv>
      </TypeheadWrapper>
  
  );
};

const TypeheadWrapper = styled.div`
  padding: auto;
`;
const IconDiv = styled.div`

width:500px;
margin-left:200px;
margin-top:-30px;
  @media (max-width: 768px) and (max-height: 900px) {
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 95vw;
  }
`;
const MainIcon = styled(IconSearch)`
 

`;

const Input = styled.input`
  width: 450px;
  height: 35px;
  border-radius: 15px;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 10px;
 
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 80vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 80vw;
  }
`;


export default SearchBar;
