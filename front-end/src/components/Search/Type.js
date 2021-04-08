import React from "react";

import Filter from "./Filter";
const Type = ({ subStatus, type, setType, list, setTypeList }) => {
  return (
    <Filter
      subStatus={subStatus}
      list={list}
      setList={setTypeList}
      state={type}
      setState={setType}
    />
  );
};

export default Type;
