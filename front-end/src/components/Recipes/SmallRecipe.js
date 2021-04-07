import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants";

const SmallRecipe = ({ data }) => {
  const history = useHistory();
  const { id } = useParams();
  const [singleId, setSingleId] = useState("");


  useEffect(() => {
    fetch(`blog/${id}`)
      .then((data) => data.json())
      .then((data) => data.data)
      .then((res) => {
        setSingleId(res);
       
      });
  }, [singleId]);

  return (
    <Wrapper>
      {data &&
        data.map((recipe) => {
          if (!recipe.image) {
            return false;
          }
          return (
            <Main
              key={recipe.id}
              onClick={(e) => {
                history.replace(`recipe/${recipe.id}`);
              }}
            >
              <TitleDiv><Title>{recipe.title}</Title></TitleDiv>
              <ImageDiv>
                  <Image src={recipe.image} />
              </ImageDiv>
            </Main>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
border: 5px double ${COLORS.primary};
  border-radius:40px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: auto;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
  width: 5/90vh;
  &:hover {
    cursor: pointer;
  
  }
`;
const Layout = styled.div``;
const Image = styled.img`
  height: 120px;
  width: 15vw;
  padding: 10px;
  transition: 0.7s;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
    background-color: #f7dc83;
    border-radius:20px;
  }
`;
const ImageDiv = styled.div``;
const TitleDiv = styled.div`
text-overflow: ellipsis;
max-width: 15vw;
max-height: 20vh;
overflow: hidden;
white-space: nowrap;

`;
const Title = styled.h5`
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;


`;

export default SmallRecipe;

/// analyzedInstructions(steps) [array]
//dishTypes
//Title
