import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import styled from "styled-components";

const Body = () => {
    return (<Wrapper>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
                  
        </Switch>
      </Wrapper>)
  };
  
  const Wrapper = styled.div`

  `;
  export default Body;