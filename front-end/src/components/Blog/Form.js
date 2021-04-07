import React, { useEffect, useState } from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

const Form = ({
  title,
  details,
  handleSubmit,
  username,
  setTitle,
  setDetails,
  ingredients,
  setIngredients,
  fileUpload,
  setFileUpload,
  status,
  setStatus,
}) => {
  const [preview, setPreview] = useState();
  console.log(preview);
  useEffect(() => {
    if (status === "success") {
      setTitle("");
      setDetails("");
      setIngredients("");
      ;
    }
  }, [status]);
  return (
    <Wrapper>
      <MainForm onSubmit={handleSubmit}  >
        <Main>
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
            <SubWrapper>
              <TextIngredients
                type="text"
                placeholder="Ingredients"
                onChange={(ev) => setIngredients(ev.currentTarget.value)}
                minLength="0"
                value={ingredients}
              />
            </SubWrapper>
            <SubText>
              <TextArea
                type="text"
                placeholder="What's cooking?"
                onChange={(ev) => setDetails(ev.currentTarget.value)}
                minLength="0"
                value={details}
              />
            </SubText>
            <div>
              <InputImage
                max-file-size="1024"
                type="file"
                accept=".png, .jpg, .jpeg"
                // onInput={(ev)=>{ setFileUpload(ev.target.files)}}
                onChange={(ev) => {
                  let files = ev.target.files[0];
                  let file_size = files.size;
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
            <Button type="submit"
           
            >Submit</Button>
          </SubmitBar>
        </Main>
      </MainForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 400px;
  @media (max-width: 768px) and (max-height: 900px) {
    height: 70vh;
    width: 70vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 70vw;
    height: 70vh;
  }
`;
const MainForm = styled.form``;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  @media (max-width: 768px) and (max-height: 900px) {
    width: 70vw;
    height: 70vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    width: 70vw;
    height: 70vh;
  }
`;
const TitleDiv = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    width: 70vw;
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
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 50vw;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 50vw;
  }
`;
const TextArea = styled.textarea`
  height: 100px;
  width: 500px;
  border: none;
  padding: 10px;
  text-indent: 10px;
  border-radius: 10px;
  font-family: "Shippori Mincho", serif;
  font-size: 80%;
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 70vw;
    max-height: 50vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 70vw;
    max-height: 50vh;
  }
`;
const TextIngredients = styled.textarea`
  border: none;
  text-indent: 10px;
  padding: 10px;
  height: 100px;
  width: 500px;
  border-radius: 10px;
  font-family: "Shippori Mincho", serif;
  font-size: 80%;
  @media (max-width: 768px) and (max-height: 900px) {
    max-width: 70vw;
    max-height: 50vh;
  }
  @media (max-width: 650px) and (max-height: 850px) {
    max-width: 70vw;
    max-height: 50vh;
  }
`;
const SubmitBar = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  height: 100px;
  width: 500px;

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
