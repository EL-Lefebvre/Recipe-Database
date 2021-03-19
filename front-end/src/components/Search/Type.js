import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { typeData } from "./Utilities";
const Type = ({ type, setType }) => {
  return (
    <Wrapper>
      <List>
      {typeData.map((data) => {
          return <Item value={data} onClick={()=>{setType(data.name)}}>{data.name}</Item>;
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
  overflow-y: scroll;
  scrollbar-width: thin;
`;
const List = styled.ul`
  margin-left: -35px;
  padding-right: 10px;
`;
const Item = styled.li`
  &:hover {
    color: ${COLORS.secondary};
    background-color: #eae2c9;
    cursor: pointer;
  }
`;
export default Type;