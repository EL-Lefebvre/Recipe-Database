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
              <ImageDiv>
                <Image src={recipe.image} />
              </ImageDiv>
              <TitleDiv>
                <Title>{recipe.title}</Title>
              </TitleDiv>
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

  border-radius: 40px;
  width: 80vw;
  padding: 20px;
  margin-top: -40px;
  @media (max-width: 800px) and (max-height: 1024px) {
  }
  @media (max-width: 768px) and (max-height: 900px) {
  }
  @media (max-width: 650px) and (max-height: 850px) {
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
  width: 25vw;
  border-radius: 10px;
  margin: 0px auto;

  background-color: white;
  border: 5px double ${COLORS.primary};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-top: 10px;

  &:hover {
    cursor: pointer;
    background-color: #f7dc83;
    border-radius: 20px;
  }

  @media (max-width: 800px) and (max-height: 1024px) {
    width: 35vw;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    width: 35vw;
    height: 40vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 60vw;
  }
`;
const Layout = styled.div``;
const Image = styled.img`
  height: 15vh;
  width: 25vw;
  max-width: 25vh;
  transition: 0.7s;
  @media (max-width: 800px) and (max-height: 1024px) {
    width: 35vw;
    max-width: 35vh;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    width: 35vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 35vw;
  }
`;
const ImageDiv = styled.div``;
const TitleDiv = styled.div`
  width: 15vw;
  height: 20vh;

  padding-bottom: 10px;
  max-width: 25vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  width: 30vw;
  @media (max-width: 800px) and (max-height: 1024px) {
    width: 50vw;
    height: 10vh;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    width: 40vw;

    flex-warp: wrap;
    height: 2vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 40vw;
    height: 2vh;
  }
`;
const Title = styled.h5`
  text-overflow: ellipsis;
  overflow: hidden;

  max-height: 15vh;
  height: 7vh;

  @media (max-width: 800px) and (max-height: 1024px) {
    width: 30vw;
  }
  @media (max-width: 768px) and (max-height: 900px) {
  }
  @media (max-width: 650px) and (max-height: 850px) {
  }
`;

export default SmallRecipe;

/// analyzedInstructions(steps) [array]
//dishTypes
//Title
