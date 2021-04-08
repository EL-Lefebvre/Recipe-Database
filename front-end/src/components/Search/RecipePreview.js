import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const RecipePreview = ({ result, index }) => {
  return (
    <SearchResult key={index}>
      <NavigationLink exact to={`/recipe/${result.id}`}>
        <SuggestionColumn>
          <Regular>{result.title}</Regular>
          <Image src={result.image} />
        </SuggestionColumn>
      </NavigationLink>
    </SearchResult>
  );
};
const SearchResult = styled.div`


  padding-top: 10px;
  justify-content: space-between;
  margin-bottom: 15px;
  height: 120px;
  &:hover {
    background-color: hsla(50deg, 100%, 80%, 0.25);
  }
`;

const SuggestionColumn = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Regular = styled.span`
  font-weight: normal;
`;
const DivImage = styled.div;
const Image = styled.img`
  padding-top: 5px;
  height: 110px;
  width: 150px;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  margin: 0px 0 0 5px;
  padding: 7px 10px;
  display: flex;
  justify-content: flex-start;
  color: black;
  font-size: 15px;
  font-weight: normal;
  height: 65px;
  padding-bottom: 15px;

  &:hover {
    color: gray;
  }
`;

const NoResults = styled.div`
  height: 100px;
  background-color: white;
`;
export default RecipePreview;
