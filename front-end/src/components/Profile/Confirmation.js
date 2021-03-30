import React, { useState, useEffect, useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

import { RecipeContext } from "../../RecipeContext";
const Confirmation = () => {
  const {
    individualData,
    setIndividualData,
  } = useContext(RecipeContext);
useEffect(()=>{
  fetch('/user',{
    method: "GET",
    withCredentials: true,
    url: "http://localhost:4000/user",

  })
  .then((res) => res.json())
  .then((res) => {
    setIndividualData(res.username);
    console.log(res.username);
  })


},[])
  
  console.log(individualData)
  return (
    <Wrapper>
      <Title>
        <h1> Confirmation</h1>
      </Title>
      <Layout>

      
       
          
     
 
<div>
        {individualData ? <h1>Welcome Back {individualData}</h1> : null}
        </div>
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
const Register = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputField = styled.input`
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


const Category = styled.div``;

export default Confirmation;
