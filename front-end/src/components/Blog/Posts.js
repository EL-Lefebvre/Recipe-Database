import React from "react";
import { useHistory } from "react-router-dom";
import { COLORS } from "../../constants";
import styled from "styled-components";

const Posts = ({ posts, setPosts }) => {
  const history = useHistory();
  return (
    <Wrapper>
      {posts &&
        posts.map((post) => {
          return (
            <Layout
              key={post._id}
              onClick={(e) => {
                history.replace(`blog/${post._id}`);
              }}
            >
              <DivImage>
                {post.fileUpload && <Image src={post.fileUpload} />}
              </DivImage>

              <Recipes>
                <Title>
                  <h4>By {post.username}</h4>
                </Title>
                <Details>
                  <div>
                    <Span>
                      <Text>{post.title}</Text>
                    </Span>
                  </div>
                  <IndividualRecipe>
                    <Text>{post.details}</Text>
                  </IndividualRecipe>
                </Details>
              </Recipes>
            </Layout>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  &:hover {
    cursor: pointer;
  }
`;
const Layout = styled.div`
  width: 60vw;

  margin-top: 0px;
  display: flex;
  background-color: #f0f0e8;
  border: 5px double ${COLORS.primary};
  align-items: center;
  border-radius: 15px;
  padding: 10px;
  min-height: 40vh;
  margin-bottom: 50px;
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 60vw;

    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 85vw;
  }
`;

const Title = styled.div`
  text-decoration: underline;
  color: ${COLORS.primary};
  margin-left: 20px;
`;

const Span = styled.span`
  font-weight: bolder;
`;
const Recipes = styled.div`
min-width:35vw;
max-width:50vw

  margin-left:20px;
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:    flex-start;

  @media (max-width: 1000px)  {
align-items:center;

  }
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 60vw;
    max-height: 30vh;
    margin-top: 0px;
 
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 60vw;
    max-height: 30vh;
    margin-top: 0px;

  }
`;
const DivImage = styled.div`
  margin-left: 20px;
  border-radius: 20px;
`;
const IndividualRecipe = styled.div`
  display: flex;
  justify-content: center;
  max-height: 15vh;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 20px;

  @media (max-width: 768px) and (max-height: 900px) {
    justify-content: center;
    margin-left: 0px;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    justify-content: center;
  }
`;
const Text = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 140px;

  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 60vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 60vw;
  }
`;
const Image = styled.img`
  width: 140px;
  height: 150px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export default Posts;
