import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

import RecipePreview from "./RecipePreview";
const Results = ({ keyword, cuisine, type, diet, intolerances }) => {
  const [suggestion, setSuggestion] = useState([]);


  const newSuggestion = async () => {
    try {
      const response = await fetch(
        `/recipes?keyword=${keyword}&cuisine=${cuisine}&type=${type}&diet=${diet}&intolerances=${intolerances}`
      )
        .then((res) => res.json())
        .then((data) => data.data)
        .then((data) => data.results);

      setSuggestion(response);
      return response;
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    newSuggestion();
  }, [keyword, cuisine, type, diet, intolerances]);
console.log(suggestion);
  return (
    <Wrapper>
      {" "}
      {suggestion &&
        suggestion.map((result, index) => {
          return <RecipePreview result={result} index={index} />;
        })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  z-index: 1;
`;

export default Results;
