import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import HeartIcon from "./HeartIcon";
import PoppingCircle from "./PoppingHeart";
import ScaleIn from "./ScaleIn";

const Heart = ({ color, size, toggleLiked }) => {
  const heartSize = size * 0.6;
  return (
    <Wrapper style={{ width: size, height: size }}>
      {toggleLiked && <PoppingCircle color="#E790F7" />}

      {toggleLiked ? (
        <ScaleIn>
          <HeartIcon
            color={color}
            width={heartSize}
            toggleLiked={toggleLiked}
          />
        </ScaleIn>
      ) : (
        <HeartIcon width={heartSize} toggleLiked={toggleLiked} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const numLike = styled.h5``;
export default Heart;
