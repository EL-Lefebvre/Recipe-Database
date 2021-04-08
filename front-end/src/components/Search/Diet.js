import React from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

import Filter from "./Filter";
const Diet = ({ subStatus, diet, setDiet, list, setDietList }) => {
  return (
    <Filter
  

          subStatus={subStatus}
  

              list={list}
    

            setList={setDietList}
   
     
        state={diet}
 
     
          setState={setDiet}
   
   
    />
  );
};


export default Diet;
