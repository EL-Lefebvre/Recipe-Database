import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

const Occasion = () => {
    return (
        <Wrapper>
          <List>
          <Item>Main Course</Item>
            <Item>Side Dish</Item>
            <Item>Dessert</Item>
            <Item>Appetizer</Item>
            <Item>Salad</Item>
            <Item>Bread</Item>
            <Item>Breakfast</Item>
            <Item>Soup</Item>
            <Item>Beverage</Item>
            <Item>Sauce</Item>
            <Item>Marinade</Item>
            <Item>Fingerfood</Item>
            <Item>Snack</Item>
            <Item>Drink</Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </List>
        </Wrapper>
      );
    };
    
    const Wrapper = styled.div``;
    const List = styled.ul``;
    const Item = styled.li``;
export default Occasion;
