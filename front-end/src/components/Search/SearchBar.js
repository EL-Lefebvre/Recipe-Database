import React, { useState } from "react";
import styled from "styled-components";
import Suggestion from "./Suggestion";
import { useHistory } from "react-router-dom";

import { COLORS } from "../../constants";

const SearchBar = ({ data }) => {
  let history = useHistory();
  const [value, setValue] = useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);

  const handleSelect = (suggestion) => {
    history.push(`/recipe/${suggestion}`);
    history.push("/temp");
    history.goBack();
    setValue("");
  };

  return (
    <div>
      <TypeheadWrapper>
        <Input
          value={value}
          onKeyDown={(ev) => {
            switch (ev.key) {
              case "ArrowUp": {
                setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                return;
              }
              case "ArrowDown": {
                setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                return;
              }
              case "Escape": {
                setValue("");
                return;
              }
              default:
                return;
            }
          }}
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
        />
      </TypeheadWrapper>
      <SuggestionWrapper>
        <Suggestion
          data={data}
          value={value}
          handleSelect={handleSelect}
          selectedSuggestionIndex={selectedSuggestionIndex}
          setSelectedSuggestionIndex={setSelectedSuggestionIndex}
        ></Suggestion>
      </SuggestionWrapper>
    </div>
  );
};

const TypeheadWrapper = styled.div``;

const Input = styled.input`
  width: calc(100vw * 0.3);
  font-family: "Alata", sans-serif;
  font-size: 15px;
  outline: none;
  border-radius: 25px;
  padding: 5px;
  margin: 2px;
  margin-right: 40px;
`;

const SuggestionWrapper = styled.div``;
export default SearchBar;
