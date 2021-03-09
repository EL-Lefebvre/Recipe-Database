import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";
import LogoSrc from "../assets/logo.png";
import { BiWine as Wine } from "react-icons/bi";
import { BiSearchAlt as Search } from "react-icons/bi";
import { CgProfile as Profile } from "react-icons/cg";
import { BsFillChatSquareDotsFill as Blog } from "react-icons/bs";
import Cover from "../assets/background.jpg";
const Header = () => {
  return (
    <Wrapper
      style={{
        backgroundImage: "url(" + `${Cover}` + ")",
      }}
    >
      <Image>
        <Link to="/">
          <Logo alt="Logo" src={LogoSrc} height="250vh" />
        </Link>
      </Image>
      <Border></Border>
      <Main>
        <Menu>
          <Item>
            <Link to="/browse">
              {" "}
              <Search size={20} /> <Text>Browse</Text>
            </Link>
          </Item>
          <Item>
            <Link to="/wine">
              {" "}
              <Wine size={20} /> <Text>Wine Pairing</Text>
            </Link>
          </Item>
          <Item>
            <Link to="/blog">
              {" "}
              <Blog size={20} /> <Text>Blog</Text>
            </Link>
          </Item>
          <Item>
            <Link to="/profile">
              {" "}
              <Profile className="icons" size={20} /> <Text>Profile</Text>
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

  background-size: cover;
  height: 60vh;
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

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Item = styled.li``;
const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bolder;
  display: flex;
  align-items: center;
  padding-right: 10px;
  &:hover {
    color: ${COLORS.primary};
  }
`;
const Text = styled.h3`
  padding-left: 10px;
  padding-bottom: 4px;
  border-bottom: 2px  solid;
  &:hover {
    border-bottom: 2px ${COLORS.primary} solid;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    display: none;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    display: none;
  }
`;
const Image = styled.div`

  margin-bottom: 10px;
  z-index: 2;
  display: flex;
  justify-content: center;
  
`;
const Logo = styled.img`
  border: 5px black double;
  height: 240px;
  border-radius:60px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 1.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const Icon = styled.img``;
export default Header;
