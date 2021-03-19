import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { intolerancesData } from "./Utilities";
const Intolerances = ({ intolerances, setIntolerances }) => {
  return (
    <Wrapper>
      <List>
        {intolerancesData.map((data) => {
          return (
            <Item
              value={data}
              onClick={() => {
                setIntolerances(data.name);
              }}
            >
              {data.name}
            </Item>
          );
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
  margin-left: -30px;
  padding-right: 10px;
  width: 100px;
`;
const Item = styled.li`
  &:hover {
    color: ${COLORS.secondary};
    background-color: #eae2c9;
    cursor: pointer;
  }
`;
export default Intolerances;
