import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

// import { RecipeContext } from "../RecipeContext";
const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 201) {
          console.log(json);
        } else {
          console.log("error qwerty");
        }
      })
      .catch((err) => {
        console.error("err");
      });
  };
  return (
    <Wrapper>
      <Title>
        <h1> Register</h1>
      </Title>
      <Layout>
        <form method="POST" action="/register">
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(ev) => setUserName(ev.currentTarget.value)}
            value={username}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(ev) => setPassWord(ev.currentTarget.value)}
            value={password}
          />
          <button type="submit" onSubmit={handleSubmit}>
            {" "}
            Submit{" "}
          </button>
        </form>

        <li>
          <a href="/register">Sign Up</a>
        </li>
        <li>
          <a href="/login">Login!</a>
        </li>
        <li>
          <a href="/">Logout!</a>
        </li>
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
  margin-top: 0px;
  display: flex;
  flex-direction: column;
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
const Title = styled.div`
  color: white;
  text-decoration: underline;
`;
const Search = styled.div`
  height: 150px;
  width: 500px;
`;
const SearchBar = styled.input`
  width: 450px;
  height: 35px;
  border-radius: 15px;
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
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  min-height: 60vh;
  min-width: 80vw;
  margin-bottom: 200px;
`;
const Image = styled.img`
  width: 500px;
  height: 300px;
`;

const Category = styled.div``;

export default Register;
