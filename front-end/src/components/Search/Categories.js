import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import French from "../../assets/frenchfood.jpg";
import Indian from "../../assets/indianfood.jpg";
import Appetizer from "../../assets/appetizer.jpg";
import Dessert from "../../assets/dessert.jpg";
import Vegan from "../../assets/vegan.jpg";
import { RecipeContext } from "../../RecipeContext";

const Categories = () => {
  return (
    <Wrapper>
      <NavigationLink exact to={`/browse`}>
        <SuggestionColumn>
          <TitleDiv>
            <Regular>Vegan</Regular>
          </TitleDiv>
          <Image src={Vegan} />
        </SuggestionColumn>
      </NavigationLink>
      <NavigationLink exact to={`/browse`}>
        <SuggestionColumn>
          <TitleDiv>
            <Regular>Indian Food</Regular>
          </TitleDiv>
          <Image src={Indian} />
        </SuggestionColumn>
      </NavigationLink>
      <NavigationLink exact to={`/browse`}>
        <SuggestionColumn>
          <TitleDiv>
            <Regular>Appetizer</Regular>
          </TitleDiv>
          <Image src={Appetizer} />
        </SuggestionColumn>
      </NavigationLink>
      <NavigationLink exact to={`/browse`}>
        <SuggestionColumn>
          <TitleDiv>
            <Regular>Dessert</Regular>
          </TitleDiv>
          <Image src={Dessert} />
        </SuggestionColumn>
      </NavigationLink>
      <NavigationLink exact to={`/browse`}>
        <SuggestionColumn>
          <TitleDiv>
            <Regular>French Food</Regular>
          </TitleDiv>
          <Image src={French} />
        </SuggestionColumn>
      </NavigationLink>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 90vw;
  padding-top: 10px;
  justify-content: space-between;
  display: flex;
  margin-bottom: 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${COLORS.primary};
flex-wrap:wrap;
@media (max-width: 1160px)  {
  justify-content: center;

}
  @media (max-width: 768px) and (max-height: 900px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width:  80vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width:  80vw;
  }
`;

const SuggestionColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  
`;

const TitleDiv = styled.div`
  max-width: 12vw;
  position: absolute;
  z-index: 2;
  margin-top: 60px;
  color: white;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 50vw;
    max-height: 50vw;
    margin-top: 100px;

  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 50vw;
    max-height: 50vw;
    margin-top: 100px;
  
  }
`;
const ImageDiv = styled.div``;

const Regular = styled.h3`
  width: 180px;
  background: rgba(0, 0, 0, 0.5);
`;
const Image = styled.img`
  padding-top: 5px;

  height: 30vh;
  border-radius: 200px;
  opacity: 0.7;
  z-index: 1;
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  @media (max-width: 1160px)  {

    margin:20px;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    width: 45vw;
    height: 45vh;
    border-radius: 100%;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 45vw;
    height: 45vh;
    border-radius: 100%;
  }
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;

  &:hover {
    color: gray;
  }
`;

export default Categories;
