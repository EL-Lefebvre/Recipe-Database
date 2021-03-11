import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import styled from "styled-components";
import Profile from './Profile';
import Browse from './Search/Browse';
import WinePairing from "./WinePairing";
const Body = () => {
    return (<Wrapper>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          {/* <Route exact path="/">
            <Home />
          </Route> */}
        </Switch>
      </Wrapper>)
  };
  
  const Wrapper = styled.div`

  `;
  export default Body;