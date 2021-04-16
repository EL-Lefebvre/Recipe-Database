import React, { useEffect } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

const Form = ({
  title,
  details,

  username,
  setTitle,
  setDetails,
  ingredients,
  setIngredients,
  fileUpload,
  setFileUpload,
  status,
  setStatus,
  addNewPost,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("/recipes/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        title: title,
        ingredients: ingredients,
        details: details,
        fileUpload: fileUpload,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 201) {
          const newPostSuccess = {
            username: username,
            title: title,
            ingredients: ingredients,
            details: details,
            fileUpload: fileUpload,
          };
          addNewPost(newPostSuccess);
          console.log(json);
          setStatus("success");
        } else {
          console.log("error qwerty");
          setStatus("error");
        }
      })
      .catch((err) => {
        console.error("err");
      });
  };

  useEffect(() => {
    if (status === "success") {
      setTitle("");
      setDetails("");
      setIngredients("");
    }
  }, [status]);
  return (
    <Wrapper>
      <MainForm onSubmit={handleSubmit}>
        <TitleDiv>
          <div>
            <Info
              type="text"
              placeholder="Title of your recipe"
              onChange={(ev) => setTitle(ev.currentTarget.value)}
              value={title}
            />
          </div>
          <div>
            <Title placeholder="Username" value={username}>
              By {username}
            </Title>
          </div>
        </TitleDiv>
        <TextDiv>
          <TextIngredients
            type="text"
            placeholder="Ingredients"
            onChange={(ev) => setIngredients(ev.currentTarget.value)}
            minLength="0"
            value={ingredients}
          />

          <TextArea
            type="text"
            placeholder="What's cooking?"
            onChange={(ev) => setDetails(ev.currentTarget.value)}
            minLength="0"
            value={details}
          />

          <div>
            <InputImage
              max-file-size="1024"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={(ev) => {
                let files = ev.target.files[0];
                const reader = new FileReader();

                if (files) {
                  reader.onload = (ev) => {
                    setFileUpload(ev.target.result);
                  };
                  reader.readAsDataURL(files);
                } else {
                  setFileUpload("This file is too big");
                }
              }}
            />
          </div>
        </TextDiv>
        <SubmitBar>
          <Button type="submit">Submit</Button>
        </SubmitBar>
      </MainForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60vh;
max-height:100vh;
  @media (max-width: 1000px)  {
    height: 75vh;
 
  }
  @media (max-width: 768px) and (max-height: 900px) {
    height: 80vh;

  }
  @media (max-width: 650px) and (max-height: 850px) {
  padding-top:20px;

  }
`;
const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 50vw;
  }
  @media (max-width: 768px) and (max-height: 900px) {
    width: 100vw;
    height: 70vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 90vw;
    height: 70vh;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  width:50vw;
  @media (max-width: 1000px)  {
    width: 100vw;
  
  }
  @media (max-width: 768px) and (max-height: 900px) {
    width:100vw;
    height: 70vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
  width:90vw;
    height: 70vh;
  }
`;
const TitleDiv = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px)  {
flex-wrap:wrap;
   flex-direction: reverse column ;

  }
  @media (max-width: 768px) and (max-height: 900px) {
    flex-direction: column;
    align-item: center;
    justify-content: center;
    width: 70vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    flex-direction: column;
    align-item: center;
    justify-content: center;
    width: 100vw;
  }
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SubText = styled.div``;

const Info = styled.input`
  height: 30px;
  width: 250px;
  border: none;
  margin-bottom: 10px;
  font-family: Shippori Mincho, serif;
  padding-left: 20px;
  border-radius: 10px;
  @media (max-width: 1000px)  {
    width: 40vw;
 
  }
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 50vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 100vw;
  }
`;
const TextArea = styled.textarea`
  height: 100px;
  width: 40vw;

  border: none;
  padding: 10px;
  text-indent: 10px;
  border-radius: 10px;
  font-family: "Shippori Mincho", serif;
  font-size: 80%;
  @media (max-width: 1000px)  {
    width: 40vw;
    height:20vh;
  }
  @media (max-width: 768px) and (max-height: 900px) {
       width: 70vw;
    max-height: 50vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 70vw;
    max-height: 50vh;
  }
`;
const TextIngredients = styled.textarea`
  border: none;
  text-indent: 10px;
  padding: 10px;
  height: 100px;
  width: 40vw;
  border-radius: 10px;
  font-family: "Shippori Mincho", serif;
  font-size: 80%;
  @media (max-width: 1000px)  {

 height:20vh;
  }
  @media (max-width: 768px) and (max-height: 900px) {
      width: 70vw;
    max-height: 50vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
      width: 70vw;
    max-height: 50vh;
  }
`;
const SubmitBar = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  height: 5vh;
  width: 40vw;

  margin-top: 10px;
  justify-content: flex-end;
  border: none;
  padding: 10px;
  text-indent: 10px;
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 70vh;
    justify-content: center;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 65vw;
    justify-content: center;
  }
`;

const Button = styled.button`
  background-color: ${COLORS.primary};
  font-weight: bolder;
  font-size: 100%;
  color: white;
  border-radius: 10px;
  width: 100px;
  height: 30px;
  border: none;
`;
const InputImage = styled.input``;
const Title = styled.h3`
  color: white;
  text-decoration: underline;
`;
export default Form;
