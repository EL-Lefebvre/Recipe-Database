import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import Form from "./Form";
import Posts from "./Posts";
import { RecipeContext } from "../../RecipeContext";
import MainLogo from "../../assets/404.png";
const Blog = () => {
  const { individualData, setIndividualData } = useContext(RecipeContext);
  const [username, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("null");
  const [ingredients, setIngredients] = useState("");
  const [fileUpload, setFileUpload] = useState("");


  useEffect(() => {
    let currentUser = localStorage.getItem("data");
    setUserName(currentUser);
  }, [individualData]);

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
  useEffect(() => {
    postedRecipe();
  }, [status === "success"]);
  console.log(posts);
  console.log(posts);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("/recipes/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        title: title,
        ingredients: ingredients,
        details: details,
        fileUpload: fileUpload,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 201) {
          console.log(json);
          setStatus("success");
         
        } else {
          console.log("error qwerty");
          setStatus("error");
        }
      })
      .catch((err) => {
        console.error("err");
      });
  };



  return (
    <Wrapper>
      <Layout>
        <Title>
          <h1>Blog</h1>
        </Title>
        {username && (
          <Form
            username={username}
            details={details}
            title={title}
            handleSubmit={handleSubmit}
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
    max-width: 85vw;
    margin-top: -30px;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 85vw;
    margin-top: -30px;
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
`;

const Title = styled.div`
  color: white;
  text-decoration: underline;
`;
const DivImage = styled.div``;
const RecipeImage = styled.img`
  width: 50px;
  height: 100px;
`;
const Recipes = styled.div`
  display: flex;
  flex-direction: column;
`;
const IndividualRecipe = styled.div``;
const Category = styled.div``;

export default Blog;
