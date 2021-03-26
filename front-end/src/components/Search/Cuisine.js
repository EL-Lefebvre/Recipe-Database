import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { cuisinesData } from "./Utilities";
import Filter from "./Filter";
const Cuisine = ({ cuisine, setCuisine, list, setCuisineList }) => {
  return (
    <Filter
      list={list}
      setList={setCuisineList}
      state={cuisine}
      setState={setCuisine}
    />
  );

};

const Wrapper = styled.fieldset`
  background-color: white;
  max-height: 30vh;
  overflow-x: scroll;
  scrollbar-width: thin;
`;
const List = styled.form``;
const Item = styled.li`
  &:hover {
    color: ${COLORS.secondary};
    background-color: #eae2c9;
    cursor: pointer;
  }
`;
const CheckBox = styled.input`
  &:checked {
    background-color: yellow;
  }
`;
export default Cuisine;
