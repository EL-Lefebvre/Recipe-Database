import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { dietsData } from "./Utilities";
import Filter from "./Filter";
const Diet = ({ diet, setDiet, list, setDietList }) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(diet);



    return (
      <Filter
        list={list}
        setList={setDietList}
        state={diet}
        setState={setDiet}
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
export default Diet;
