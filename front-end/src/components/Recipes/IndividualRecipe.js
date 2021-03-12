import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { COLORS } from "../../constants";
import styled from "styled-components";
import BigRecipe from "./BigRecipe";
import { RecipeContext } from "../../RecipeContext";
const IndividualRecipe = () => {
  const [individualData, setIndividualData] = useState();
  const { id } = useParams();
  const IndividualRecipe = async () => {
    try {
      const response = await fetch(`/recipes/${id}`)
        .then((res) => res.json())
        .then((data) => data.data);

      setIndividualData(response);
      return response;
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    if (!individualData) {
      IndividualRecipe();
    }
  }, [individualData]);

  return (
    <Wrapper>
      <BigRecipe individualData={individualData} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f0f0e8;
  padding-top: 50px;
`;


export default IndividualRecipe;
