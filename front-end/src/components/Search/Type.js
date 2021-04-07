import React from "react";

import Filter from "./Filter";
const Type = ({ type, setType, list, setTypeList }) => {
  return (
    <Filter list={list} setList={setTypeList} state={type} setState={setType} />
  );
};

export default Type;
