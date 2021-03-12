import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Suggestion = ({
  data,
  value,
  handleSelect,
  setSelectedSuggestionIndex,
  selectedSuggestionIndex,
}) => {
  if (value.length <= 1) {
    return "";
  }
  let searchResults = data.filter((item, i) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });
  let searchResults10entries = searchResults.slice(0, 10);

  return <div></div>;
};

export default Suggestion;
