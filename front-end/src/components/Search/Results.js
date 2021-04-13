import React, { useState, useEffect, useContext } from "react";
import { RecipeContext } from "../../RecipeContext";
import { COLORS } from "../../constants";
import styled from "styled-components";

import RecipePreview from "./RecipePreview";

const Results = ({
  keyword,
  cuisine,
  type,
  diet,
  intolerances,
  selectedItems,
  setSelectedItems,
  suggestion,
  setSuggestion,
  newSuggestion,
}) => {
  const { cuisineList, typeList, dietList, intoleranceList } = useContext(
    RecipeContext
  );

  useEffect(() => {
    newSuggestion();
  }, [selectedItems, keyword]);
  useEffect(() => {
    if (selectedItems) {
      console.log(selectedItems);
    }
  }, []);
  useEffect(() => {
    newSuggestion();
  }, [keyword]);
  useEffect(() => {
    newSuggestion();
  }, [cuisineList, typeList, dietList, intoleranceList]);
  const FilteredList = (data) => {
    const newList = data.filter((list) => list.selected);
    const LabelList = newList.map((list) => list.label);
    return LabelList;
  };

  useEffect(() => {
    const newList = cuisineList;
    const result = FilteredList(newList);

    setSelectedItems({
      cuisine: result,
      type: [...type],
      intolerances: [...intolerances],
      diet: [...diet],
    });
  }, [cuisine]);
  useEffect(() => {
    const newList = typeList;
    const result = FilteredList(newList);

    setSelectedItems({
      cuisine: [...cuisine],
      type: result,
      intolerances: [...intolerances],
      diet: [...diet],
    });
  }, [type]);
  useEffect(() => {
    const newList = intoleranceList;
    const result = FilteredList(newList);
    setSelectedItems({
      cuisine: [...cuisine],
      type: [...type],
      intolerances: result,
      diet: [...diet],
    });
  }, [intolerances]);
  useEffect(() => {
    const newList = dietList;
    const result = FilteredList(newList);
    setSelectedItems({
      cuisine: [...cuisine],
      type: [...type],
      intolerances: [...intolerances],
      diet: result,
    });
  }, [diet]);
  return (
    <Wrapper>
      <Main>
        <ListWrapper>
          {selectedItems.cuisine &&
            selectedItems.cuisine.map((type) => <List>{type}</List>)}
        </ListWrapper>
        <ListWrapper>
          {selectedItems.type &&
            selectedItems.type.map((type) => <List>{type}</List>)}
        </ListWrapper>
        <ListWrapper>
          {selectedItems.diet &&
            selectedItems.diet.map((diet) => <List>{diet}</List>)}
        </ListWrapper>
        <ListWrapper>
          {selectedItems.intolerances &&
            selectedItems.intolerances.map((intolerances) => (
              <List>{intolerances}</List>
            ))}
        </ListWrapper>
      </Main>
      {suggestion &&
        suggestion.map((result, index) => {
          return <RecipePreview result={result} index={index} />;
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1;
  background-color: white;
  padding-top: 20px;
  @media (max-width: 768px) {
  }
  @media (max-width: 650px) and (max-height: 850px) {
  }
`;
const Main = styled.div`
  display: flex;
  justify-content: space-evenly;

  color: ${COLORS.primary};
`;
const ResultsDiv = styled.div``;
const ListWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  width: 15vw;
`;

const List = styled.li`
  border: 2px solid ${COLORS.primary};
  padding: 5px;
  border-radius: 10px;
`;
export default Results;
