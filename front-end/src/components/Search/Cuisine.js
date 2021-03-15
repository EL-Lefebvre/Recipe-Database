import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { cuisinesData } from "./Utilities";
const Cuisine = ({ cuisine, setCuisine }) => {

  return (
    <Wrapper>
      <List>
        {cuisinesData.map((data) => {
          return <Item>{data.name}</Item>;
        })}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  max-height: 30vh;
  overflow-x: scroll;
  scrollbar-width: thin;

`;
const List = styled.ul`
  margin-left: -35px;
`;
const Item = styled.li`
  &:hover {
    color: ${COLORS.secondary};
    background-color: #eae2c9;
    cursor: pointer;
  }
`;
export default Cuisine;
