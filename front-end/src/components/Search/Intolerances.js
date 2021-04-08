import React from "react";

import Filter from "./Filter";
const Intolerances = ({
  subStatus,
  list,
  setIntoleranceList,
  intolerances,
  setIntolerances,
}) => {
  return (
    <Filter
        subStatus={subStatus}
      list={list}
      setList={setIntoleranceList}
      state={intolerances}
      setState={setIntolerances}
    />
  );
};

export default Intolerances;
