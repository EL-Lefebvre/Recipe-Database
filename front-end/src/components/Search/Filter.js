import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

export const Filter = ({ subStatus, list, setList, state, setState }) => {
  return list.map(({ id, label, selected }) => {
    return (
      <List>
        <Label htmlFor={id}>
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
        </Label>
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
@media (max-width: 768px) and (max-height: 900px) {

}
@media (max-width: 650px) and (max-height: 850px) {

}
`;
const List = styled.div`
  width: 25vw;
  display: flex;
  justify-content: space-between;
  align-item: center;

  @media (max-width: 800px) and (max-height: 1024px) {
    width: 40vw;
  }

  @media (max-width: 768px) and (max-height: 900px) {
  }
  @media (max-width: 650px) and (max-height: 850px) {
 
  }
`;
const Span = styled.div``;
const Label = styled.label`
display:flex;
justify-content:center
width:200px;
`;
const CheckBox = styled.input`
  &:checked {
    background-color: yellow;
  }
`;
export default Filter;
