import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import styled from "styled-components";
import Profile from "./Profile";
import Browse from "./Search/Browse";
import WinePairing from "./WinePairing";
import Blog from "./Blog";
import IndividualRecipe from "./Recipes/IndividualRecipe";
const Body = () => {
  return (
    <Wrapper>
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
