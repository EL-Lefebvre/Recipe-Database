import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { COLORS } from "../../constants";
import styled from "styled-components";
import Logo from "../../assets/food.png";
import Posts from "../Blog/Posts";
import ProfileBar from "./ProfileBar";
import { RecipeContext } from "../../RecipeContext";
import Spinner from "../Tools/Spinner";
import Favorites from "./Favorites";
const Profile = () => {
  const {
    currentUser,
    setCurrentUser,
    status,
    setStatus,
    results,
    setResults,
  } = useContext(RecipeContext);
const [subStatus, setSubStatus] = useState("loading");
  const [posts, setPosts] = useState([]);
  const [itemClicked, setItemClicked] = useState("favorites");
  const [favorites, setFavorites] = useState([]);
  ///Importing posts from users

  useEffect(() => {
    if(currentUser){

      setSubStatus("user");
    fetch(`/favorites/${currentUser}`, {
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    })
      .then((res) => res.json())
      .then((res) => {
        setFavorites(res.data);
      });
    }
    else {
      setStatus('waiting')
    }
   
  }, [currentUser]);

  useEffect(() => {
    if (results && currentUser) {
      setSubStatus("loaded");
    }
  }, [status]);
  useEffect(() => {
    if (results && currentUser) {
      const filteredPosts = results.filter(
        (res) => res.username === currentUser
      );
  
      setPosts(filteredPosts);
    }
  }, [results]);
  // console.log(posts);
  // console.log(results);
  // console.log(itemClicked);
  return (
    <Wrapper>
      {subStatus === "loaded" || currentUser ? (
        <MainDiv>
          <Layout>
            <Title>
              <h1>Profile</h1>
            </Title>
            <ProfileBar
              itemClicked={itemClicked}
              setItemClicked={setItemClicked}
            />
                 <UserName>
            <Welcome>Welcome back {currentUser} !</Welcome>
          </UserName>
          </Layout>
     
          <Main>
            {posts && itemClicked === "posts" ? (
                 <div>
                 <SubTitle><h3>Your Own Recipes</h3></SubTitle>
              <Posts posts={posts} setPosts={setPosts} />
              </div>
            ) : (
              <div>
              <SubTitle><h3>Favorites</h3></SubTitle>
              <Favorites favorites={favorites} setFavorites={setFavorites} />
              </div>
            )}
          </Main>
        </MainDiv>
      ) : (
        <MainDiv>
          {" "}
          <Spinner />
        </MainDiv>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  background-color: #f0f0e8;

  margin-top: -30px;
  padding-top: 50px;
`;
const Layout = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  border: 5px double black;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.primary};
  border-radius: 15px;
  text-align:center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 200px;
  width: 500px;
  margin-bottom: 50px;
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 85vw;

  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 85vw;

  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubTitle = styled.div`

`;
const Title = styled.div`
  color: white;
  text-decoration: underline;
 
`;
const UserName = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
  color: white;
  margin-top:-50px;
  letter-spacing: 2px;

`;
const Welcome = styled.h4`
color:white;

font-weight:bolder;
`;
const Link = styled.a`
  text-decoration: none;
  &:visited {
    color: white;
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

export default Profile;
