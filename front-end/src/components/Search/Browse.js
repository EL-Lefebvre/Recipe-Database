import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Cuisine from "./Cuisine";
import Diet from "./Diet";
import Intolerances from "./Intolerances";
import Occasion from "./Occasion";
import Type from "./Type";
import { RecipeContext } from "../../RecipeContext";
import { RiArrowDropDownLine as DropDownArray } from "react-icons/ri";
const Browse = () => {
  const [cuisine, setCuisine] = useState(false);
  const [type, setType] = useState(false);
  const [intolerances, setIntolerances] = useState(false);
  const [diet, setDiet] = useState(false);

  const handleCuisine = (ev) => {
    ev.preventDefault();
    setCuisine(!cuisine);
  };
  const handleType = (ev) => {
    ev.preventDefault();
    setType(!type);
  };
  const handleIntolerances = (ev) => {
    ev.preventDefault();
    setIntolerances(!intolerances);
  };
  const handleDiet = (ev) => {
    ev.preventDefault();
    setDiet(!diet);
  };

  return (
    <Wrapper>
      <Layout>
        <Title>
          <h1>Find a Recipe</h1>
        </Title>
        <Search>
          <SearchBar type="text" />
        </Search>
      </Layout>
      <Main>
        <ListWrapper>
          <List>
            <Item onClick={handleCuisine}>
              <Column>
                <Arrow>
                  Cuisine
                  <DropDownArray size={20} />
                </Arrow>
                {cuisine && (
                  <Cuisine cuisine={cuisine} setCuisine={setCuisine} />
                )}
              </Column>
            </Item>
            <Item onClick={handleType}>
              <Column>
                <Arrow>
                  Type
                  <DropDownArray size={20} />
                </Arrow>
                {type && <Type type={type} setType={setType} />}
              </Column>
            </Item>
            <Item onClick={handleDiet}>
              <Column>
                <Arrow>
                  Diet <DropDownArray size={20} />
                </Arrow>
                {diet && <Diet diet={diet} setDiet={setDiet} />}
              </Column>
            </Item>
            <Item onClick={handleIntolerances}>
              <Column>
                <Arrow>
                  Intolerances <DropDownArray size={20} />
                </Arrow>
                {intolerances && (
                  <Intolerances
                    intolerances={intolerances}
                    setIntolerances={setIntolerances}
                  />
                )}
              </Column>
            </Item>
          </List>
        </ListWrapper>
        <Results></Results>
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
const Title = styled.div`
  color: white;
  text-decoration: underline;
`;
const Search = styled.div`
  height: 150px;
  width: 500px;
`;

const Main = styled.div`
  display: flex;

  border: 1px solid black;
  min-height: 60vh;
  min-width: 80vw;
  margin-bottom: 200px;
`;
const ListWrapper = styled.div`
  background-color: white;
  width: 80vw;
  height: 20px;
`;
const Results = styled.div``;
const List = styled.ul`
  display: flex;
  height: 20px;
  justify-content: space-around;
  align-items: flex-start;
`;
const Item = styled.li`
  display: flex;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const Arrow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
font-weight:bolder;
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

export default Browse;
