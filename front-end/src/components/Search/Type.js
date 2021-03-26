import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { typeData } from "./Utilities";
const Type = ({ type, setType }) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(type);

  useEffect(()=>{
setIsChecked(!isChecked)

  },[type])
  return (
    <Wrapper>
    
      {typeData.map((data, id) => {
          return <List
          key={id}
          onChanged={() => {
            setIsChecked(true);
          }}
          onClick={() => {
            setType(data.name);
          }}
        >
          <label htmlFor={id}> {data.name} </label>
          <CheckBox

            type="checkbox"
         
            checked={data.name === type}
          />
        </List>
        })}

    </Wrapper>
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
