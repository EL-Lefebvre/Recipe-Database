import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

export const Filter = ({ subStatus, list, setList, state, setState }) => {
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
                } 
               else {
                  setState([]);
                }
              }
              else if  (subStatus === 'clear') {
                copiedList.forEach((list)  => list.selected = false);
                setState([]);
              }
              if (!copiedList[index].selected) {
                const filteredFilter = newState.indexOf(
                  !copiedList[index].selected
                );
                console.log(filteredFilter);
                const newFilter = state.splice(filteredFilter);
                console.log(newFilter);
                setState(newFilter);
              }
            }}
          />
        </label>
      </List>
    );
  });
};

const Wrapper = styled.div`
  background-color: white;
display:flex;
flex-wrap:wrap;
border:none;
max-height:300px;
width:70vw;

`;
const List = styled.div`
width:15vw;
display:flex;
align-item:center;


`;
const Span = styled.div``;
const CheckBox = styled.input`
  &:checked {
    background-color: yellow;
  }
`;
export default Filter;
