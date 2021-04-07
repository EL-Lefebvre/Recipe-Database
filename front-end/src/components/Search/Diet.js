import React from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

import Filter from "./Filter";
const Diet = ({ diet, setDiet, list, setDietList }) => {

  console.log(diet);



    return (
      <Filter
        list={list}
        setList={setDietList}
        state={diet}
        setState={setDiet}
      />
    );

};


export default Diet;
