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
  console.log(id);
  console.log(posts);


  return (
    <Wrapper>
      {posts &&
  posts.map((post) => {
          if (post._id === id) {
            return (
              <Main key={post[id]}>
                <Layout>
                  <Image src={post.fileUpload} />
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
  min-height: 60vw;
  letter-spacing: 3px;
  @media (max-width: 768px) and (max-height: 900px) {
    min-height: 100vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    min-height: 100vh;
  }
`;
const Main = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) and (max-height: 900px) {
    flex-direction: column;
    align-items: space-evenly;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    flex-direction: column;
  }
`;
const Layout = styled.div`
  border: 3px double ${COLORS.primary};

  background-color: white;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 85vw;
    margin-top: -30px;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 85vw;
    margin-top: -30px;
  }
`;

const Description = styled.div`
  width: 50vw;
  background-color: white;
  padding: 10px;
  margin-bottom: 30px;
  @media (max-width: 768px) and (max-height: 900px) {
    border-top: 1px solid black;
    padding-top: 15px;
    margin-top: 50px;
    padding-bottom: 15px;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    margin-top: 50px;
    padding-top: 15px;
    padding-bottom: 15px;
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
`;
const UserName = styled.div``;
const Image = styled.img`
  max-height: 270px;
  width: 280px;
  border-radius: 20px;
  padding: 10px;
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
`;
export default SinglePost;
