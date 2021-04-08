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
import { GiHearts as Heart } from "react-icons/gi";
const Profile = () => {
  const {
    currentUser,
    setCurrentUser,
    status,
    setStatus,
    results,
    setResults,
    getUser,
  } = useContext(RecipeContext);
  const [subStatus, setSubStatus] = useState("loading");
  const [posts, setPosts] = useState([]);
  const [itemClicked, setItemClicked] = useState("favorites");
  const [favorites, setFavorites] = useState([]);
  ///Importing posts from users
  useEffect(() => {
    if (!currentUser) {
      getUser();
    } else {
      console.log(currentUser);
    }
  }, []);
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("data", currentUser);
    }
  }, [currentUser]);
  useEffect(() => {
    if (currentUser) {
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
    } else {
      setStatus("waiting");
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

  const handleClear = () => {
    localStorage.removeItem("data");
  };

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
              <Welcome>Welcome back [ {currentUser} ] !</Welcome>
            </UserName>
          </Layout>

          <Main>
            {posts && itemClicked === "posts" ? (
              <PostsWrapper>
                <SubTitle>
                  <h3>[ Your Own Recipes ] </h3>
                </SubTitle>
                <Posts posts={posts} setPosts={setPosts} />
              </PostsWrapper>
            ) : (
              <FavoriteWrapper>
                <SubTitle>
                  <h3>[ Favorites ]</h3> <Heart size={20} />
                </SubTitle>
                <Favorites favorites={favorites} setFavorites={setFavorites} />
              </FavoriteWrapper>
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
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 200px;
  width: 45vw;
  margin-bottom: 50px;
  @media (max-width: 768px) and (max-height: 900px) {
    width: 90vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 90vw;
  }
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.primary};
  border-radius: 10px;
  min-height: 40vh;

  min-width: 80vw;
  margin-bottom: 200px;
  background-color: white;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubTitle = styled.div``;
const Title = styled.div`
  color: white;
  text-decoration: underline;
`;
const UserName = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
  color: white;
  margin-top: -50px;
  letter-spacing: 1px;
`;
const Welcome = styled.h4`
  color: white;

  font-weight: bolder;
`;
const FavoriteWrapper = styled.div`


`;
const PostsWrapper = styled.div`
`;
export default Profile;
