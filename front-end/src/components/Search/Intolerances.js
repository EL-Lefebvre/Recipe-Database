import React from "react";

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
