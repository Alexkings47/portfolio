import React from "react";
import styled from "styled-components";
import { VscGithubAlt } from "react-icons/vsc";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin, FiTwitter } from "react-icons/fi";

const StyledDiv = styled.div`
  @keyframes move {
    0% {
      transform: translateY(5rem);
    }
    100% {
      transform: translateY(1rem);
    }
  }

  font-size: 18px;
  position: fixed;
  top: 2rem;
  left: 0;
  margin-left: -11rem;
  animation: move linear 4s none infinite;
  animation-delay: 3000ms;

  .media-icons {
    margin-bottom: 1rem;
  }
  .horizontal-line {
    transform: rotate(90deg);
    border-bottom: 1px solid white;
    height: 1px;
    width: 60vh;
    margin-bottom: 15rem;
  }
`;

export const SocialMedia = ({className }) => {
  return (
    <StyledDiv className={`flex-column-spaced`}>
     <div className="horizontal-line"></div>
    <MediaIcons className={className}/>
    </StyledDiv>
  );
};

export const MediaIcons = ({className}) => {
  return (
    <div className={className || "flex-column-spaced"}>
      <a href="." style={{ color: "white" }} className="media-icons">
        {" "}
        <VscGithubAlt />
      </a>
      <a href="." style={{ color: "purple" }} className="media-icons">
        {" "}
        <BsInstagram />
      </a>
      <a href="." style={{ color: "var(--cyan)" }} className="media-icons">
        {" "}
        <FiLinkedin />
      </a>
      <a
        href="."
        style={{ color: "var(--light-blue)" }}
        className="media-icons"
      >
        {" "}
        <FiTwitter />
      </a>
    </div>
  );
};


