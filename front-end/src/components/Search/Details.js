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

const Details = () => {
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

  const handleCuisine = (ev) => {
    ev.preventDefault();
    setToggles({ ...toggles, cuisine: !toggles.cuisine });
  };
  const handleType = (ev) => {
    ev.preventDefault();
    setToggles({ ...toggles, type: !toggles.type });
  };
  const handleIntolerances = (ev) => {
    ev.preventDefault();
    setToggles({ ...toggles, intolerances: !toggles.intolerances });
  };
  const handleDiet = (ev) => {
    ev.preventDefault();
    setToggles({ ...toggles, diet: !toggles.diet });
  };

  return (
    <Wrapper>
      <List>
        <Item onClick={handleCuisine}>
          <Column>
            <Arrow>
              Cuisine
              <DropDownArray size={20} />
            </Arrow>

            {toggles.cuisine && (
              <Fieldset>
                <Cuisine
                  cuisine={cuisine}
                  setCuisine={setCuisine}
                  list={cuisineList}
                  setCuisineList={setCuisineList}
                />
              </Fieldset>
            )}
          </Column>
        </Item>
        <Item onClick={handleType}>
          <Column>
            <Arrow>
              Type
              <DropDownArray size={20} />
            </Arrow>
            {toggles.type && (
              <Fieldset>
                <Type
                  type={type}
                  setType={setType}
                  list={typeList}
                  setTypeList={setTypeList}
                />
              </Fieldset>
            )}
          </Column>
        </Item>
        <Item onClick={handleDiet}>
          <Column>
            <Arrow>
              Diet <DropDownArray size={20} />
            </Arrow>
            {toggles.diet && (
              <Fieldset>
                <Diet
                  diet={diet}
                  setDiet={setDiet}
                  list={dietList}
                  setDietList={setDietList}
                />
              </Fieldset>
            )}
          </Column>
        </Item>
        <Item onClick={handleIntolerances}>
          <Column>
            <Arrow>
              Intolerances <DropDownArray size={20} />
            </Arrow>

            {toggles.intolerances && (
              <Fieldset>
                <Intolerances
                  list={intoleranceList}
                  setIntoleranceList={setIntoleranceList}
                  intolerances={intolerances}
                  setIntolerances={setIntolerances}
                />
              </Fieldset>
            )}
          </Column>
        </Item>
      </List>
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

const Fieldset = styled.fieldset`
  background-color: white;
  max-height: 30vh;
  overflow-x: scroll;
  scrollbar-width: thin;
  width: 10vw;
`;



const List = styled.ul`
  display: flex;

  justify-content: space-around;
  align-items: flex-start;
`;
const Item = styled.li`
  display: flex;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Arrow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bolder;
  &:hover {
    color: ${COLORS.secondary};
  }
`;
const BlockWrapper = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 500px;
  height: 300px;
`;

const Category = styled.div``;

export default Details;
