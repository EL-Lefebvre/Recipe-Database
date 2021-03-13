import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import styled from "styled-components";
import Profile from "./Profile";
import Browse from "./Search/Browse";
import WinePairing from "./WinePairing";
import Blog from "./Blog/Blog";
import IndividualRecipe from "./Recipes/IndividualRecipe";
import { RecipeContext } from "../RecipeContext";
const Body = () => {
  const { toggle, setToggle } = useContext(RecipeContext);
  return (
    <Wrapper   onClick={() => {
      setToggle(false);
    }}>
      <Switch>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/browse">
          <Browse />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/wine">
          <WinePairing />
        </Route>

        <Route exact path="/recipe/:id">
          <IndividualRecipe />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default Body;
