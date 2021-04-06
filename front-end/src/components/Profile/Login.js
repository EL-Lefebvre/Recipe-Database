import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

import { RecipeContext } from "../../RecipeContext";
const Login = () => {
  const {
    loginUserName,
    setLoginUserName,
    loginPassword,
    setLoginPassword,
    currentUser,
    setCurrentUser,
  } = useContext(RecipeContext);
  const [status, setStatus] = useState("loading");
  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginUserName,
        password: loginPassword,
      }),
      withCredentials: true,
      url: "http//localhost:8000/login",
    }).then((res) => {
      if (res.status === 404) {
        setStatus("User non existant");
      } else {
        console.log(res);
      }
    });
  };
  return (
    <Wrapper>
      <Layout>
        <Title>
          <h1> Login</h1>
        </Title>

        <Main method="POST" action="/login">
          <InputField
            type="text"
            name="username"
            placeholder="username"
            onChange={(ev) => setLoginUserName(ev.currentTarget.value)}
            value={loginUserName}
          />
          <InputField
            type="password"
            name="password"
            placeholder="password"
            onChange={(ev) => setLoginPassword(ev.currentTarget.value)}
            value={loginPassword}
          />
          <Button type="submit" onSubmit={handleSubmit}>
            {" "}
            Login{" "}
          </Button>
        </Main>
        <LinkList>
          <Item>
            <Link href="/register">Sign Up</Link>
          </Item>
        </LinkList>
      </Layout>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #f0f0e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 50px;
`;
const Layout = styled.div`
  min-width: 30vw;
  min-height: 60vh;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 5px double black;
  align-items: center;
  background-color: ${COLORS.third};
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 150px;
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
const Main = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 30vh;
`;
const Title = styled.div`
  color: white;
  text-decoration: underline;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;

  color: white;
`;
const Item = styled.li``;
const Link = styled.a`
  &:visited {
    color: white;
  }
`;
const InputField = styled.input`
  border-radius: 15px;
  width: 20vw;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 80vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 80vw;
  }
`;

const Button = styled.button`
  height: 30px;
  width: 12vw;
  background-color: ${COLORS.primary};
  border: none;
`;

export default Login;
