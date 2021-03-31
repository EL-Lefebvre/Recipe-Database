import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import styled from "styled-components";
import Profile from "./Profile/Profile";
import Login from "./Profile/Login";
import Register from "./Profile/Register";
import Browse from "./Search/Browse";
import WinePairing from "./WinePairing";
import Blog from "./Blog/Blog";
import Error from "./Error";
import Logout from "./Profile/Logout";
import IndividualRecipe from "./Recipes/IndividualRecipe";
import { RecipeContext } from "../RecipeContext";
const Body = () => {
  const { toggle, setToggle } = useContext(RecipeContext);
  return (
    <Wrapper
      onClick={() => {
        setToggle(false);
      }}
    >
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/logout">
          <Logout />
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

        <Route exact path="/error">
          <Error />
        </Route>
      </Switch>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default Body;
