import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RecipeContext } from "../../RecipeContext";
const Results = ({ keyword, cuisine, type, diet, intolerances }) => {

  let history = useHistory();
  const [value, setValue] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);

  const handleSelect = (suggestion) => {
    history.push(`/recipe/${suggestion}`);
    history.push("/temp");
    history.goBack();
    setValue("");
  };
  const newSuggestion = async () => {
    try {
      const response = await fetch(
        `/recipes?keyword=${keyword}&cuisine=${cuisine}&type=${type}&diet=${diet}&intolerances=${intolerances}`
      )
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
    newSuggestion();

  }, [keyword, cuisine, type, diet, intolerances]);



  return (<Wrapper> { suggestion && suggestion.map((result, i) => {
    return (
      <SearchResult
        key={i}
        // onKeyDown={(ev) => {
        //   switch (ev.key) {
        //     case "ArrowUp": {
        //       setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
        //       return;
        //     }
        //     case "ArrowDown": {
        //       setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
        //       return;
        //     }
        //     case "Escape": {
        //       setValue("");
        //       return;
        //     }
        //     default:
        //       return;
        //   }}}     
        
      >
        <NavigationLink exact to={`/recipe/${result.id}`}>
          <SuggestionColumn>
            <Regular>{result.title}</Regular>
            <Image src={result.image} />
          </SuggestionColumn>
        </NavigationLink>
      </SearchResult> )})}
      </Wrapper>)
}

const Wrapper = styled.div`
  z-index: 1;
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

const NoResults = styled.div`
  height: 100px;
  background-color: white;
`;
export default Results;
