import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../constants";
import styled from "styled-components";

const Blog = () => {
  const [details, setDetails] = useState("");
  return (
    <Wrapper>
      <Layout>
        <Title>
          <h1>Blog</h1>
        </Title>
        <TextDiv>
          {/* <Form
            onSubmit={(ev) => {
              ev.preventDefault();
              fetch("/recipes/post", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  details,
                }),
              })
                .then((res) => res.json())
                .then((json) => {
                  if (json.success) {
                    console.error("201");
                  } else {
                    console.error("404");
                  }
                })
                .catch((err) => {
                  console.error("err");
                });
            }}
          >
            <TextArea
              type="text"
              placeholder="What's cooking?"
              onChange={(ev) => setDetails(ev.currentTarget.value)}
              minLength="0"
              value={details}
            />
          </Form> */}
        </TextDiv>
        <SubmitBar>
          <Button type="submit">Submit</Button>
        </SubmitBar>
      </Layout>

      <Main>
        <h2>Share all your recipes !</h2>
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
const Form = styled.form``;
const TextDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const TextArea = styled.textarea`
  border: none;
  padding: 10px;
  width: 45vw;
  height: 140px;
  text-indent: 10px;
  padding: none;
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
const SubmitBar = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  width: 95%;

  margin-top: 10px;
  justify-content: flex-end;
  border: none;
  padding: 10px;

  text-indent: 10px;
  padding: none;
`;

const Button = styled.button`
  background-color: ${COLORS.primary};
  font-weight: bolder;
  font-size: 100%;
  color: white;
  border-radius: 10px;
  width: 100px;
  height: 30px;
  border: none;
`;

const Title = styled.div`
  color: white;
  text-decoration: underline;
`;

const Recipes = styled.div`
  display: flex;
  flex-direction: column;
`;
const IndividualRecipe = styled.div``;
const Category = styled.div``;

export default Blog;
