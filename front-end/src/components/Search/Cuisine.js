import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { cuisinesData } from "./Utilities";
const Cuisine = ({ cuisine, setCuisine }) => {
  // const [selected, setSelected] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  console.log(cuisine);

  useEffect(()=>{
setIsChecked(!isChecked)

  },[cuisine])
  // console.log(selected)
  return (
    <Wrapper>
      {cuisinesData.map((data, id) => {
        return (
          <List
            key={id}
            onChanged={() => {
              setIsChecked(true);
            }}
            onClick={() => {
              setCuisine(data.name);
            }}
          >
            <label htmlFor={id}> {data.name} </label>
            <CheckBox
 
              type="checkbox"
           name={data.name}
              checked={data.name === cuisine}
            />
          </List>
        );
      })}
    </Wrapper>
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
