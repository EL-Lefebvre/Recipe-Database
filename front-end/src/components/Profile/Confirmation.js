import React, { useContext } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";
import { RecipeContext } from "../../RecipeContext";
const Login = () => {
  const { status, currentUser } = useContext(RecipeContext);

  return (
    <Wrapper>
      <Layout>
        <Title>
          <h1> You have been registered successfully!</h1>
        </Title>

        <LinkList>
          <Item>
            <Link href="/login">Log In</Link>
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
    padding: 10px;
  min-width: 30vw;
  min-height: 40vh;
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

const Title = styled.div`
  color: white;

  max-width: 40vw;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.primary};
  border-radius: 20px;
  padding: 10px;
  color: white;
  width: 15vw;
`;
const Item = styled.li``;
const Link = styled.a`
  &:visited {
    color: white;
  }
`;

export default Login;
