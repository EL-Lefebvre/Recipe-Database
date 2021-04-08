import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants";

const SmallRecipe = ({ data }) => {
  const history = useHistory();
  const { id } = useParams();
  const [singleId, setSingleId] = useState("");
  const [newData, setNewData] = useState();

  useEffect(() => {
    if (data) {
      fetch(`blog/${id}`)
        .then((data) => data.json())
        .then((data) => data.data)
        .then((res) => {
          setSingleId(res);
        });
    }
  }, [singleId]);

  useEffect(() => {
    if (data) {
      const ArrayData = data.slice(0, 6);
      setNewData(ArrayData);
    }
  }, [data]);
  console.log(newData);
  return (
    <Wrapper>
      {newData &&
        newData.map((recipe) => {
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
              <TitleDiv>
                <Title>{recipe.title}</Title>
              </TitleDiv>
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
  border-radius: 40px;
  width: 65vw;
  padding-bottom: 20px;
  margin-top: 40px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: auto;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
  width: 5/90vh;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-top: 10px;

  &:hover {
    cursor: pointer;
    background-color: #f7dc83;
    border-radius: 20px;
  }
`;
const Layout = styled.div``;
const Image = styled.img`
  height: 120px;
  width: 15vw;
  padding: 10px;
  transition: 0.7s;
  border-radius: 30px;
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
