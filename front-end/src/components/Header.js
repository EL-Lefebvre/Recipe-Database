import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";
import LogoSrc from "../assets/logo.png";
import { BiWine as Wine } from "react-icons/bi";
import { BiSearchAlt as Search } from "react-icons/bi";
import { CgProfile as Profile } from "react-icons/cg";
import { BsFillChatSquareDotsFill as Blog } from "react-icons/bs";
const Header = () => {
  return (
    <Wrapper>
      <Image>
        <Logo alt="Logo" src={LogoSrc} height="250vh" />
      </Image>
      <Border></Border>
      <Main>
        <Menu>
          <Item>
            <Link to="/browse">
              {" "}
              <Search color="white" size={25} /> <Text>Browse</Text>
            </Link>
          </Item>
          <Item>
            <Link to="/wine">
              {" "}
              <Wine color="white" size={25} /> <Text>Wine Pairing</Text>
            </Link>
          </Item>
          <Item>
            <Link to="/blog">
              {" "}
              <Blog color="white" size={20} /> <Text>Blog</Text>
            </Link>
          </Item>
          <Item>
            <Link to="/profile">
              {" "}
              <Profile color="white" size={25} /> <Text>Profile</Text>
            </Link>
          </Item>
        </Menu>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.primary};
  height: 55vh;
`;
const Border = styled.div`
  margin-top: -130px;

  margin-bottom: 30px;
  z-index: 1;
  border: 1px solid black;
`;
const Main = styled.div`
  z-index: 2;
  margin-top: 100px;
`;
const Menu = styled.ul`
  height: 50px;
  list-style-position: inside;
  margin-left: -50px;
  margin-top: 20px;
  background-color: ${COLORS.fourth};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Item = styled.li``;
const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bolder;
  display: flex;


  align-items: center;
`;
const Text = styled.h3`
  padding-left:5px;
`;
const Image = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  z-index: 2;
  display: flex;
  justify-content: center;
`;
const Logo = styled.img`
  border: 5px black double;
`;
const Icon = styled.img``;
export default Header;
