import React from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

function Form({
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
}) {
  return (
    <Wrapper>
      <MainForm onSubmit={handleSubmit}>
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
              <h5 placeholder="Username" value={username}>
                By {username}
              </h5>
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
                type="file"
                value={fileUpload}
                accept="image/*"
                onInput={(ev) => setFileUpload(ev.target.value)}
                onClick={(ev)=> { 
                  ev.target.value = null
             }}
              />
            </div>
          </TextDiv>
          <SubmitBar>
            <Button type="submit">Submit</Button>
          </SubmitBar>
        </Main>
      </MainForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 400px;
`;
const MainForm = styled.form``;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleDiv = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
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
