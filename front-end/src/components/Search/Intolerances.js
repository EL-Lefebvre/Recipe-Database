import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { intolerancesData } from "./Utilities";
import Filter from "./Filter";
const Intolerances = ({
  list,
  setIntoleranceList,
  intolerances,
  setIntolerances,
}) => {
  return (
    <Filter
      list={list}
      setList={setIntoleranceList}
      state={intolerances}
      setState={setIntolerances}
    />
  );
};

export default Intolerances;
