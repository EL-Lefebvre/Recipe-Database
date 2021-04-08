import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Cuisine from "./Cuisine";
import Diet from "./Diet";
import Intolerances from "./Intolerances";
import Type from "./Type";
import Results from "./Results";
import { RecipeContext } from "../../RecipeContext";
import { RiArrowDropDownLine as DropDownArray } from "react-icons/ri";

const Browse = () => {
  const {
    cuisineList,
    setCuisineList,
    typeList,
    setTypeList,
    dietList,
    setDietList,
    intoleranceList,
    setIntoleranceList,
  } = useContext(RecipeContext);

  const [toggles, setToggles] = useState({
    cuisine: false,
    type: false,
    intolerances: false,
    diet: false,
  });

  const [cuisine, setCuisine] = useState([]);
  const [type, setType] = useState([]);
  const [intolerances, setIntolerances] = useState([]);
  const [diet, setDiet] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [subStatus, setSubStatus] = useState("initial");
  console.log(intolerances);
  const [selectedItems, setSelectedItems] = useState({
    cuisine: [],
    type: [],
    intolerances: [],
    diet: [],
  });
  const handleClear = (ev) => {
    setSelectedItems({
      cuisine: [],
      type: [],
      intolerances: [],
      diet: [],
    });
    setCuisine([])
    setType([])
    setDiet([])
    setIntolerances([])
setSubStatus("clear")
  };
  const handleCuisine = (ev) => {
    ev.preventDefault();
    setToggles({
      cuisine: !toggles.cuisine,
      type: false,
      intolerances: false,
      diet: false,
    });
  
  };
  const handleType = (ev) => {
    ev.preventDefault();
    setToggles({
      cuisine: false,
      type: !toggles.type,
      intolerances: false,
      diet: false,
    });


  };
  const handleIntolerances = (ev) => {
    ev.preventDefault();
    setToggles({
      cuisine: false,
      type: false,
      intolerances: !toggles.intolerances,
      diet: false,
    });
   
  };
  const handleDiet = (ev) => {
    ev.preventDefault();
    setToggles({
      cuisine: false,
      type: false,
      intolerances: false,
      diet: !toggles.diet,
    });
   
  };

  return (
    <Wrapper>
      <Layout>
        <Title>
          <h1>Find a Recipe</h1>
        </Title>
        <Search>
          <SearchBar keyword={keyword} setKeyword={setKeyword} type="text" />
        </Search>
      </Layout>
               {selectedItems.cuisine && <Button onClick={handleClear}>Clear Filters</Button>}
      <Main>
        <ListWrapper>
          <List>
            <Item onClick={handleCuisine}>
              <Arrow>
                Cuisine
                <DropDownArray size={20} />
              </Arrow>
            </Item>

            <Item onClick={handleType}>
              <Arrow>
                Type
                <DropDownArray size={20} />
              </Arrow>
            </Item>
            <Item onClick={handleDiet}>
              <Arrow>
                Diet <DropDownArray size={20} />
              </Arrow>
            </Item>
            <Item onClick={handleIntolerances}>
              <Arrow>
                Intolerances <DropDownArray size={20} />
              </Arrow>
            </Item>
          </List>
          <Column>
            {toggles.cuisine ? (
              <Fieldset>
                <Cuisine
                  subStatus={subStatus}
                  cuisine={cuisine}
                  setCuisine={setCuisine}
                  list={cuisineList}
                  setCuisineList={setCuisineList}
                />
              </Fieldset>
            ) : toggles.type ? (
              <Fieldset>
                <Type
                subStatus={subStatus}
                  type={type}
                  setType={setType}
                  list={typeList}
                  setTypeList={setTypeList}
                />
              </Fieldset>
            ) : toggles.diet ? (
              <Fieldset>
                <Diet
                  subStatus={subStatus}
                  diet={diet}
                  setDiet={setDiet}
                  list={dietList}
                  setDietList={setDietList}
                />
              </Fieldset>
            ) : toggles.intolerances ? (
              <Fieldset>
                <Intolerances
                  subStatus={subStatus}
                  list={intoleranceList}
                  setIntoleranceList={setIntoleranceList}
                  intolerances={intolerances}
                  setIntolerances={setIntolerances}
                />
              </Fieldset>
            ) : (
              <div></div>
            )}
          </Column>
        </ListWrapper>
        <ResultsDiv>
          <Results
            keyword={keyword}
            cuisine={cuisine}
            type={type}
            diet={diet}
            intolerances={intolerances}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            suggestion={suggestion}
            setSuggestion={setSuggestion}
          />
        </ResultsDiv>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f0f0e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 50px;
`;
const Layout = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  border: 5px double black;
  align-items: center;
  background-color: ${COLORS.third};
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 150px;
  margin-bottom: 50px;
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 85vw;
    margin-top: -30px;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 85vw;
    margin-top: -30px;
  }
`;
const Fieldset = styled.fieldset`
  background-color: white;
  max-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  flew-flow: column wrap;
  width: 77.5vw;
`;
const Title = styled.div`
  color: white;
  text-decoration: underline;
`;
const Search = styled.div`
  height: 170px;
  width: 500px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  min-height: 60vh;
  width: 80vw;
  margin-bottom: 200px;
`;
const ResultsDiv = styled.div`
  min-height: 100vw;
`;
const ListWrapper = styled.div`
  background-color: white;
  width: 80vw;
  height: 40px;
  z-index: 3;
`;

const List = styled.ul`
  display: flex;

  justify-content: space-around;
  align-items: flex-start;
`;
const Item = styled.li`
  display: flex;
`;
const Column = styled.div``;
const Arrow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bolder;
  &:hover {
    color: ${COLORS.secondary};
  }
`;
const Button = styled.button`
  background-color: ${COLORS.primary};
  font-weight: bolder;
  font-size: 100%;
  color: white;
  border-radius: 10px;
  width: 140px;
  height: 30px;
  border: none;
  margin-bottom: 20px;
`;

export default Browse;
