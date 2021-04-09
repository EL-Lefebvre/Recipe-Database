import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../constants";
import LogoSrc from "../assets/logo.png";
// import { BiWine as Wine } from "react-icons/bi";
import { FaHome as HomeLogo } from "react-icons/fa";
import { BiSearchAlt as Search } from "react-icons/bi";
import { CgProfile as Profile } from "react-icons/cg";
import { BsFillChatSquareDotsFill as Blog } from "react-icons/bs";
import { RecipeContext } from "../RecipeContext";
import Cover from "../assets/background.jpg";
import DropDown from "./DropDown";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(RecipeContext);
  const [toggleProfile, setToggleProfile] = useState(false);
  useEffect(() => {}, []);
  return (
    <Wrapper
      style={{
        backgroundImage: "url(" + `${Cover}` + ")",
      }}
    >
      <Image>
        <LogoLink to="/">
          <Logo alt="Logo" src={LogoSrc} />
        </LogoLink>
      </Image>

      <Main>
        <Menu>
          <Item>
            <Link to="/">
              {" "}
              <HomeLogo size={20} /> <Text>Home</Text>
            </Link>
          </Item>
          <Item>
            <Link to="/browse">
              {" "}
              <Search size={20} /> <Text>Browse</Text>
            </Link>
          </Item>

          <Item>
            <Link to="/blog">
              {" "}
              <Blog size={20} /> <Text>Blog</Text>
            </Link>
          </Item>

          {currentUser ? (
            <Item>
              <Link to="/profile">
                {" "}
                <Profile className="icons" size={20} /> <Text>Profile</Text>
              </Link>
            </Item>
          ) : (
            <Item>
              <ToggleLink
                onClick={() => {
                  setToggleProfile(!toggleProfile);
                }}
              >
                {" "}
                <Profile className="icons" size={20} /> <Text>Profile</Text>
              </ToggleLink>
            </Item>
          )}
        </Menu>

        <DropDownDiv>
          {toggleProfile && (
            <DropDown
              toggleProfile={toggleProfile}
              setToggleProfile={setToggleProfile}
            />
          )}
        </DropDownDiv>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  background-size: cover;
  min-height: 40vh;

  @media (max-width: 768px) and (max-height: 900px) {
    background-position: center;
    justify-content: space-around;
  }
  @media (max-width: 650px) and (max-height: 850px) {
  }
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
  border-top: 3px double lightslategray;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Image = styled.div`

  display: flex;
  justify-content: center;
  height: 40vh;
  z-index: 100;
  @media (max-width: 800px) and (max-height: 1024px) {
    height: 20vh;
    width:100vw;
 
  }
  @media (max-width: 768px) and (max-height: 900px) {
    height: 20vh;
    width:100vw;
  }
`;
const LogoLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bolder;


  transition: 0.3s;
  &:hover {
    color: ${COLORS.primary};
  }
  @media (max-width: 768px) and (max-height: 900px) {
  

  }
  @media (max-width: 650px) and (max-height: 850px) {
 
  }
`;
const Logo = styled.img`
  border: 5px black double;

  height:  50vh;
  border-radius: 120%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 1.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 800px) and (max-height: 1024px) {
  height:  20vh;
  margin-top:5vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    height:  30vh;
  }
`;
const Item = styled.li``;
const ToggleLink = styled.li`
text-decoration: none;
  color: black;
  font-weight: bolder;
  display: flex;
  align-items: center;
  padding-right: 10px;
  transition: 0.3s;
  &:hover {
    color: ${COLORS.primary};
  }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bolder;
  display: flex;
  align-items: center;
  padding-right: 10px;
  transition: 0.3s;
  &:hover {
    color: ${COLORS.primary};
  }
`;

const Text = styled.h3`
  padding-left: 10px;
  padding-bottom: 4px;
  border-bottom: 2px solid;
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


const DropDownDiv = styled.div`

  display: flex;
  justify-content: flex-end;
 
  height:60px;
  background-color: #f0f0e8;
`;
const Icon = styled.img``;
export default Header;
