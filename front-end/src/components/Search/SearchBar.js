import React, { useState } from "react";
import styled from "styled-components";
import Suggestion from "./Suggestion";
import { useHistory } from "react-router-dom";

// import { COLORS } from "../../constants";

const SearchBar = () => {
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
  width: 450px;
  height: 35px;
  border-radius: 15px;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 80vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 80vw;
  }
`;

const SuggestionWrapper = styled.div`

`;
export default SearchBar;
