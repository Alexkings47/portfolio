import React from "react";
import styled from "styled-components";
import { Typography } from "../atoms/Typography/Typography";
import { VscGithubAlt } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
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
  margin-left: -10rem;
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
    margin-bottom: 14rem;
  }
`;

const SocialMedia = () => {
  return (
    <StyledDiv className="flex-column-spaced">
      <div className="horizontal-line"></div>
      <div className="flex-column-spaced">
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
    </StyledDiv>
  );
};

export default SocialMedia;
