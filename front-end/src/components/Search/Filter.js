import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

export const Filter = ({ list, setList, state, setState }) => {
  return list.map(({ id, label, selected }) => {
    return (
      <List>
        <label htmlFor={id}>
          <span>{label}</span>
          <CheckBox
            id={id}
            type="checkbox"
            checked={selected}
            value={id}
            onChange={(e) => {
              const copiedList = [...list];
              const index = copiedList.findIndex((item) => item.id === id);
              const newState = state.filter(
                (stat) => stat !== `+ ${stat}` || stat !== label
              );
              if (copiedList[index]) {
                copiedList[index].selected = !selected;
                setList(copiedList);
                if (newState === state) {
                  setState([...state, `+ ${label}`]);
                } else if (newState !== state) {
                  setState([...newState, ` ${label}`]);
                } else {
                  setState([]);
                }
              }
              if (!copiedList[index].selected) {
                const filterArray = state.indexOf(!copiedList[index].selected);
                console.log(filterArray);
                const newArray = state.splice(filterArray);
                const filteredFilter = newState.indexOf(
                  !copiedList[index].selected
                );
                console.log(filteredFilter);
                const newFilter = state.splice(filteredFilter);
                setState(newFilter);
              }
            }}
          />
        </label>
      </List>
    );
  });
};

const Wrapper = styled.fieldset`
  background-color: white;
  max-height: 30vh;
  overflow-x: scroll;
  scrollbar-width: thin;
  width: 10vw;
`;
const List = styled.div`
  display: flex;
  flex-content: flex-start;
`;
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
export default Filter;
