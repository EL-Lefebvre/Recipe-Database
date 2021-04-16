import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import Form from "./Form";
import Posts from "./Posts";
import { RecipeContext } from "../../RecipeContext";

const Blog = () => {
  const { currentUser } = useContext(RecipeContext);
  const [username, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("null");
  const [ingredients, setIngredients] = useState("");
  const [fileUpload, setFileUpload] = useState("");

  const addNewPost = (post) => {
    setPosts([{ ...post }, ...posts]);
  };
  useEffect(() => {
    let currentUserName = localStorage.getItem("data");
    setUserName(currentUserName);
  }, [currentUser]);

  const postedRecipe = async () => {
    try {
      const response = await fetch(`/recipes/post`)
        .then((res) => res.json())
        .then((data) => data.data);
      console.log(response);
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
      <Layout>
        <Title>
          <h1>Blog</h1>
        </Title>
        {!username ? (
          <LinkDiv>
            <List>
              <Item>
                <Text href="http://localhost:3000/register">
                  <h2>Register</h2>
                </Text>
              </Item>
              <Item>
                <Text href="http://localhost:3000/login">
                  <h2>Login</h2>
                </Text>
              </Item>
            </List>
          </LinkDiv>
        ) : (
          <Form
            addNewPost={addNewPost}
            username={username}
            details={details}
            title={title}
        
            setTitle={setTitle}
            setDetails={setDetails}
            ingredients={ingredients}
            setIngredients={setIngredients}
            fileUpload={fileUpload}
            setFileUpload={setFileUpload}
            status={status}
            setStatus={setStatus}
          />
        )}
      </Layout>

      <Main>
        <Posts posts={posts} setPosts={setPosts} />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  background-color: #f0f0e8;
  @media (max-width: 768px) and (max-height: 900px) {
    width: 100vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 100vw;
  }
`;
const Layout = styled.div`
  width: 60vw;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  border: 5px double black;
  align-items: center;
  background-color: ${COLORS.third};
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  min-height: 30vh;
  margin-bottom: 50px;
  @media (max-width: 768px) and (max-height: 900px) {
    width: 90vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 85vw;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  min-height: 60vh;
  min-width: 80vw;
  margin-bottom: 200px;
  background-color: white;
  border-radius: 20px;
`;

const Title = styled.div`
  color: white;
  text-decoration: underline;
`;
const LinkDiv = styled.div`
  width: 20vw;

  @media (max-width: 768px)  {
    width:50vw;
  }
  @media (max-width: 450px)  {
    width:90vw;
  }

`;
const List = styled.ul`
  margin-left: -30px;
  padding-right: 10px;
  display: flex;

  justify-content: space-between;

`;
const Item = styled.li``;

const Text = styled.a`
  font-weight: bolder;
  text-decoration: none;
  color: ${COLORS.primary};
  &:visited {
    color: ${COLORS.primary};
  }
  &:hover {
    text-decoration: underline;
  }
`;

export default Blog;
