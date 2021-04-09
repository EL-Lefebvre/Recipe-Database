import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { COLORS } from "../../constants";
import styled from "styled-components";

import { RecipeContext } from "../../RecipeContext";
const Login = () => {
  const {
    status,
    loginUserName,
    setLoginUserName,
    loginPassword,
    setLoginPassword,
    currentUser,
    setCurrentUser,
  } = useContext(RecipeContext);
  const history = useHistory();
  const [subStatus, setSubStatus] = useState("loading");
  console.log(status);
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await fetch("/signin", {
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
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "success") {
          setSubStatus("success");
        } else if (res.message === "wrong password") {
          setSubStatus("wrong password");
        } else if (res.message === "no user") {
          setSubStatus("no user");
        }
      });
  };
  console.log(subStatus);
  useEffect(() => {
    if (subStatus === "success") {
      history.push("/profile");
    }
  }, [subStatus]);
  return (
    <Wrapper>
      <Layout>
        {" "}
        <Title>
          <h1> Login</h1>
        </Title>
        {subStatus === "no user" ? (
          <ErrorMessage><h6>Wrong Password or Username. Pleaser try again </h6></ErrorMessage>
        ) : (
          <ErrorMessage></ErrorMessage>
        )}
        <Main onSubmit={handleSubmit}>
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
          <Button type="submit"> Login </Button>
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


`;
const Layout = styled.div`
  min-width: 30vw;
  min-height: 100vh;
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
  @media (max-width: 800px) and (max-height: 1024px) {
    width: 70vw;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    width: 80vw;
    margin-top: -30px;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 80vw;
    margin-top: -30px;
  }
`;
const Main = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 40vh;
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
  width: 25vw;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom:    20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
 
  @media (max-width: 800px) and (max-height: 1024px) {
    width: 50vw;
    height: 5vh;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    width: 80vw;
    height: 5vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 80vw;
    height: 5vh;
  }
`;
const ErrorMessage = styled.div`
  color: white;

width:15vw;
`;

const Button = styled.button`
  height: 30px;
  width: 12vw;
  background-color: ${COLORS.primary};
  border: none;
  border-radius: 15px;
  font-weight: bolder;

  @media (max-width: 800px) and (max-height: 1024px) {
    width: 20vw;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    width: 50vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 50vw;
  }
`;

export default Login;
