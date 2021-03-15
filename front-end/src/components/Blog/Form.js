import React from "react";
import { COLORS } from "../../constants";
import styled from "styled-components";

function Form({
  userName,
  title,
  details,
  handleSubmit,
  setUserName,
  setTitle,
  setDetails,
}) {
  return (
    <Wrapper>
      <MainForm onSubmit={handleSubmit}>
        <TextDiv>
          <Info
            type="text"
            placeholder="Username"
            onChange={(ev) => setUserName(ev.currentTarget.value)}
            value={userName}
          />
          <Info
            type="text"
            placeholder="Title of your recipe"
            onChange={(ev) => setTitle(ev.currentTarget.value)}
            value={title}
          />
          <TextArea
            type="text"
            placeholder="What's cooking?"
            onChange={(ev) => setDetails(ev.currentTarget.value)}
            minLength="0"
            value={details}
          />
        </TextDiv>
        <SubmitBar>
          <Button type="submit">Submit</Button>
        </SubmitBar>
      </MainForm>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const MainForm = styled.form``;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Info = styled.input`
  height: 20px;
  border: none;
  margin-bottom: 10px;
  font-family: Shippori Mincho, serif;
  padding-left:20px;
`;
const TextArea = styled.textarea`
  border: none;
 
  font-family: Shippori Mincho, serif;
  padding: 10px;
  width: 45vw;
  height: 140px;
  text-indent: 10px;
  padding: none;
`;

const SubmitBar = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  width: 95%;

  margin-top: 10px;
  justify-content: flex-end;
  border: none;
  padding: 10px;

  text-indent: 10px;
  padding: none;
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

const Title = styled.div`
  color: white;
  text-decoration: underline;
`;
export default Form;
