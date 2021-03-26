import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { typeData } from "./Utilities";
import Filter from "./Filter";
const Type = ({ type, setType , list, setTypeList }) => {
  
  return (
    <Filter
      list={list}
      setList={setTypeList}
      state={type}
      setState={setType}
    />
  );
};

const Wrapper = styled.div`
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
export default Type;
