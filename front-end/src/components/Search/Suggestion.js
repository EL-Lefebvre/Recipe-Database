import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Suggestion = ({
  value,
  handleSelect,
  setSelectedSuggestionIndex,
  selectedSuggestionIndex,
}) => {
  const [suggestion, setSuggestion] = useState();
  const [toggle, setToggle] = useState(false);

  const newSuggestion = async () => {
    try {
      const response = await fetch(`/recipes/search/${value}`)
        .then((res) => res.json())
        .then((data) => data.data);
      setSuggestion(response);
      return response;
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    if (value.length <= 1) {
      return "";
    } else {
      newSuggestion();
    }
  }, [value]);

  useEffect(() => {
    if (suggestion) {
      setToggle(true);
    }
    else{
        setToggle(false)
    }
  }, [value]);

  return (
    <Wrapper
      style={{
        visibility: toggle ? "visible" : "hidden",
      }}
    >
      {suggestion &&
        suggestion.results.map((result, i) => {
          return (
            <SearchResult
              key={i}
              onMouseEnter={() => {
                setSelectedSuggestionIndex(i);
              }}
              onClick={() => handleSelect(result.id)}
              onKeyDown={(ev) => {
                switch (ev.key) {
                  case "Enter": {
                    handleSelect(result.id);
                    return;
                  }
                  default:
                    return;
                }
              }}
              style={{
                background:
                  i === selectedSuggestionIndex
                    ? "hsla(50deg, 100%, 80%, 0.25)"
                    : "transparent",
                visibility: toggle ? "visible" : "hidden",
              }}
            >
              <NavigationLink exact to={`/recipe/${result.id}`}>
                <SuggestionColumn>
                  <Regular>{result.title}</Regular>
                  <Image src={result.image} />
                </SuggestionColumn>
              </NavigationLink>
            </SearchResult>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  padding-top: 15px;
  margin-left: 50px;
  position: absolute;
  width: 45%;
  height: 50vh;
  box-shadow: 1px -1px 13px -1px #000000;
  background-color: white;
  z-index: 100;
  overflow-y: scroll;
  scrollbar-width: thin;
`;
const SearchResult = styled.div`
  width: 100%;
  padding-top: 10px;
  justify-content: space-between;
`;

const SuggestionColumn = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Regular = styled.span`
  font-weight: normal;
`;
const Image = styled.img`
  padding-top: 5px;
  height: 70px;
  width: 100px;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  margin: 0px 0 0 5px;
  padding: 7px 10px;
  display: flex;
  justify-content: flex-start;
  color: black;
  font-size: 15px;
  font-weight: normal;
  height: 65px;

  &:hover {
    color: gray;
  }
`;

export default Suggestion;
