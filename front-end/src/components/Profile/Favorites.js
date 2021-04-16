import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import Logo from "../../assets/food.png";
import SmallRecipe from "../Recipes/SmallRecipe";
import RecipePreview from "../Search/RecipePreview";
import { RecipeContext } from "../../RecipeContext";
const Favorites = ({ recipeFavorite, setRecipeFavorite }) => {
  const { currentUser } = useContext(RecipeContext);
  const [updatedFavorites, setUpdatedFavorites] = useState([]);
  ///Importing posts from users

  useEffect(() => {
    if (recipeFavorite && recipeFavorite.length >= 1) {
      const FilteredFavorites = recipeFavorite.map((fav) => {
        const id = fav.id;
        const title = fav.title;
        const image = fav.image;
        return { id, title, image };
      });
      setUpdatedFavorites(FilteredFavorites);
    }
  }, [recipeFavorite]);


  return (
    <Wrapper>
      <Main>
        {" "}
        {updatedFavorites.length >= 1 ? (
          updatedFavorites.map((result, index) => {
            return <RecipePreview result={result} index={index} />;
          })
        ) : (
          <div></div>
        )}
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Main = styled.div`
  z-index: 1;
  width: 80vw;
    border-radius:  20px;
  background-color: white;
`;

export default Favorites;
