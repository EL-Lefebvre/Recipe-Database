import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { dietsData } from "./Utilities";
const Diet = ({ diet, setDiet }) => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(diet);

  useEffect(()=>{
setIsChecked(!isChecked)

  },[diet])
  return (
    <Wrapper>
     
        {dietsData.map((data, id) => {
          return (
            <List
              value={data}
           
              onClick={() => {
                if (diet.length >= 1) {
                  setDiet([...diet, `+ ${data.name}`]);
                } else if (diet === data.name) {
                  setDiet([...diet]);
                } else {
                  setDiet([`${data.name}`]);
                }
              }}
              onChanged={(ev) => {
                if(ev.currentTarget.checked){
                  setIsChecked(true);
                }
             
              }}
            >
                <label htmlFor={id}> {data.name} </label>
                <CheckBox

 type="checkbox"

 checked={isChecked}
/>
            </List>
          );
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
export default Diet;
