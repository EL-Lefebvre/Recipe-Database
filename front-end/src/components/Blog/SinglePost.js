import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants";

const SinglePost = ({ post }) => {
  const { id } = useParams();
  const [posts, setPosts] = useState("");

  const postedRecipe = async () => {
    try {
      const response = await fetch(`/recipes/post`)
        .then((res) => res.json())
        .then((data) => data.data);

      setPosts(response);
      return response;
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    postedRecipe();
  }, []);

  return (
    <Wrapper>
      {posts &&
        posts.map((post) => {
          if (post._id === id) {
            return (
              <Main key={post[id]}>
                <Layout>
                  <ImageDiv>
                    <Image src={post.fileUpload} />
                  </ImageDiv>
                </Layout>
                <Description>
                  <Title>
                    <h3>{post.title}</h3>
                    {/* <Liked
                recipeId={post.id}
                handleClickLike={handleClickLike}
                toggleLiked={toggleLiked}
                recipeLiked={recipeLiked}
                setRecipeLiked={setRecipeLiked}
                setToggleLiked={setToggleLiked}
              /> */}
                  </Title>
                  <User>
                    <div>
                      <Name>Ingredients</Name>
                    </div>
                    <UserName>by {post.username}</UserName>
                  </User>
                  <Ingredients>{post.ingredients}</Ingredients>
                  <Instructions>{post.details}</Instructions>
                </Description>
              </Main>
            );
          }
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 3px;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;

    align-items: center;
    width: 100vw;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 650px) and (max-height: 850px) {
  }
`;
const Layout = styled.div`
  height: 45vh;
  padding: 20px;
  display: flex;
  @media (max-width: 800px) {
    height: 70vh;
    justify-content: center;
    margin-bottom:   20px;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    height: 50vh;
    margin-bottom:   40px;
  }
  @media (max-width: 650px) {
  }
`;

const Description = styled.div`
  width: 50vw;
  background-color: white;
  padding: 10px;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    width: 85vw;
  }
  @media (max-width: 768px) {
    border-top: 1px solid black;

    margin-top: 50px;
    padding-bottom: 15px;
    justify-content: center;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    margin-top: 50px;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 80vw;
  }
`;
const Name = styled.h2`
  text-decoration: underline;
`;
const Ingredients = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  padding-left: 20px;
`;
const Instructions = styled.div`
  line-height: 1.7;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    padding-bottom: 20px;
  }
  @media (max-width: 768px) and (max-height: 900px) {
  }
  @media (max-width: 650px) {
  }
`;
const UserName = styled.div``;

const ImageDiv = styled.div`
  display: flex;

  justify-content: center;
  border: 3px double ${COLORS.primary};
  padding: 10px;

  background-color: white;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: 800px) {
    height: 70vh;
    width: 60vw;
  }
  @media (max-width: 768px) {
    height: 60vh;
    width: 80vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 90vw;
    height: 60vh;
  }
`;
const Image = styled.img`
  min-height: 200px;
  min-width: 200px;
  border-radius: 20px;
  padding: 10px;
  @media (max-width: 800px) {
    width: 50vw;
    height: 50vh;
  }
  @media (max-width: 768px) {
    width: 70vw;
    height: 50vh;
  }
  @media (max-width: 650px) {
    width: 100vw;
    height: 50vh;
  }
`;
const Title = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${COLORS.primary};

  border-radius: 15px;
  border: 3px double ${COLORS.primary};
  height: 40px;
  padding: 15px;
  @media (max-width: 800px) {

  }
  @media (max-width: 768px) {
  
  
  }
  @media (max-width: 650px)  {
   
  
`;

export default SinglePost;
