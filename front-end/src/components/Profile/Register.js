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
  const [subStatus, setSubStatus] = useState('load');
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
      withCredentials: true,
    })
    .then((res) => res.json())
    .then((res) => {

      if (res.message === "no user") {
        setSubStatus("no user");
      }
    });
 
  };
  console.log(status);
  useEffect(() => {
    console.log(subStatus);
  }, [subStatus]);

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
            SUBMIT{" "}
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
  height: 70vh;
  margin-bottom: 50px;
  @media (max-width: 800px) and (max-height: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media (max-width: 768px) and (max-height: 900px) {
     width: 80vw;

  }
  @media (max-width: 650px) and (max-height: 850px) {
   width: 80vw;
  
  }
`;
const Main = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
height: 45vh;
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
  @media (max-width: 800px) and (max-height: 1024px) {
    width: 50vw;
    height:5vh;

  }
  @media (max-width: 768px) and (max-height: 900px) {
     width: 75vw;

  
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 75vw;

 
  }
`;

const Button = styled.button`
  height: 30px;
  width: 12vw;
  background-color: ${COLORS.primary};
  border: none;
  border-radius:15px;
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

export default Register;
