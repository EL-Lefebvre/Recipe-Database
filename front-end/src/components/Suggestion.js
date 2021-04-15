import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RecipeContext } from "../RecipeContext";
const Suggestion = ({
  value,
  handleSelect,
  setSelectedSuggestionIndex,
  selectedSuggestionIndex,
  toggle,
  setToggle,
}) => {
  const [suggestion, setSuggestion] = useState([]);

  const newSuggestion = async () => {
    try {
      const response = await fetch(`/recipes/search/${value}`)
        .then((res) => res.json())
        .then((data) => data.data)
        .then((data) => data.results);
      setSuggestion(response);
      return response;
    } catch (err) {
      console.log("error");
    }
  };

  useEffect(() => {
    if (value.length <= 2) {
      setSuggestion();
    } else {
      newSuggestion();
      setToggle(true);
    }
    return () => {
      setSuggestion(); //whenever the component removes it will executes
    };
  }, [value]);

  useEffect(() => {
    if (suggestion) {
      setToggle(true);
    } else if (value === "") {
      setSuggestion();
      setToggle(false);
    } else {
      setToggle(false);
    }
  }, [suggestion]);

  useEffect(() => {
    if (suggestion === []) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }, [suggestion]);
console.log(suggestion);
  return (
    <Wrapper>
      {suggestion && suggestion.length >=1  ? (
        <Main
          style={{
            visibility: toggle ? "visible" : "hidden",
          }}
        >
          {suggestion.map((result, i) => {
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
        </Main>): (
          <DivNoResults>
            <NoResults>No Results</NoResults>
          </DivNoResults>
        )}

    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  
  height: 80vh;
  
  @media (max-width: 800px) {
    max-width: 80vw;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    justify-content: center;
    padding-left: 20px;
  
  }
  @media (max-width: 650px) and (max-height: 850px) {
    justify-content: flex-end;
  }
`;
const Main = styled.div`
  margin-top: 20px;
  padding-top: 20px;

  border-radius: 10px;
  overflow: hidden;
  position: absolute;

  height: 50vh;
  box-shadow: 1px -1px 13px -1px #000000;
  background-color: white;
  z-index: 100;
  overflow-y: scroll;
  scrollbar-width: thin;
  @media (max-width: 800px) {
    width: 60vw;
 
  }
  @media (max-width: 768px)  {

      }
      @media (max-width: 650px) {
        width: 70vw;
      }

`;
const DivNoResults = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 55px;
  border-radius: 10px;
  overflow: hidden;
  position:absolute;


  box-shadow: 1px -1px 13px -1px #000000;
  background-color:white;
  z-index: 100;
  @media (max-width: 900px) {
    width: 50vw;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    width: 60vw;
  }
  @media (max-width: 650px) {
    width: 75vw;
  }
`;
const NoResults = styled.div`


background-color:white;
  width: 40vw;
  height: 20vh;

`;
const SearchResult = styled.div`
  padding-top: 10px;
`;

const SuggestionColumn = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  width: 30vw;
  @media (max-width: 768px)  {
width:60vw;
  }
  @media (max-width: 650px) {
    width: 70vw;
  }
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
