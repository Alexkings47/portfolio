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
      transform: translateY(0);
    }
  }

  font-size: 18px;
  position: fixed;
  top:0;
  left: 0;
  margin-left: -8rem;
  animation: move linear 4s none infinite;
  animation-delay: 3000ms;

  .media-icons {
    margin-bottom: 1rem;
  }
  .horizontal-line,
  .horizontal-line-top {
    transform: rotate(90deg);
    border-bottom: 1px solid white;
    height: 1px;
    width: 20rem;
    margin-top: 10rem;
  }
  .horizontal-line-top {
    margin-bottom: 12rem;
  }
`;

export const SocialMedia = ({ className }) => {
  return (
    <StyledDiv className={`flex-column-spaced`}>
      <div className="horizontal-line-top"></div>
      <MediaIcons className={className} />
      <div className="horizontal-line"></div>
    </StyledDiv>
  );
};

export const MediaIcons = ({ className }) => {
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
