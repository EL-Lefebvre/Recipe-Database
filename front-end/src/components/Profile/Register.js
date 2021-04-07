import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

import { RecipeContext } from "../../RecipeContext";
const Register = () => {
  const {
    status,
    setStatus,
    currentUser,
    registeredUserName,
    setRegisteredUserName,
    registeredPassword,
    setRegisteredPassword,
  } = useContext(RecipeContext);
  const handleSubmit = (ev) => {
    fetch("/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: registeredUserName,
        password: registeredPassword,
      }),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setStatus("new user");
      }
    });
 
  };
  console.log(status);
  useEffect(() => {
    console.log(status);
  }, [status]);

  return (
    <Wrapper>
      <Layout>
        <Title>
          <h1> Register</h1>
        </Title>
        <Main method="POST" action="/register">
          <InputField
            type="text"
            name="username"
            placeholder="username"
            onChange={(ev) => setRegisteredUserName(ev.currentTarget.value)}
            value={registeredUserName}
          />
          <InputField
            type="password"
            name="password"
            placeholder="password"
            onChange={(ev) => setRegisteredPassword(ev.currentTarget.value)}
            value={registeredPassword}
          />
          <Button
            type="submit"
            onSubmit={handleSubmit}
            onClick={setStatus("new user")}
          >
            {" "}
            Submit{" "}
          </Button>
        </Main>
        <LinkList>
          <Item> (Already have an account?) </Item>
          <Item>
            <Link href="/login">Login</Link>
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
  height: 310px;
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
  align-items: center;
  justify-content: space-evenly;
  min-height: 35vh;
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

export default Register;
