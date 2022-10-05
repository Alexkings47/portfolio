import React from "react";
import styled from "styled-components";
import { Typography } from "../atoms/Typography/Typography";
import { VscGithubAlt } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin, FiTwitter } from "react-icons/fi";

const StyledDiv = styled.div`
  font-size: 18px;

  .media-icons {
    margin-bottom: 1rem;
  }
  .horizontal-line {
    transform: rotateY(90deg);
    border: 1px solid black;
    height: 1px;
    width: 60vh;
  }
`;

const SocialMedia = () => {
  return (
    <StyledDiv>
      <div className="horizontal-line"></div>
      <a href="." style={{}} className="media-icons">
        {" "}
        <VscGithubAlt />
      </a>
      <a href="." style={{ color: "purple" }} className="media-icons">
        {" "}
        <BsInstagram />
      </a>
      <a href="." style={{}} className="media-icons">
        {" "}
        <FiExternalLink />
      </a>
      <a href="." style={{ color: "var(--blue)" }} className="media-icons">
        {" "}
        <FiTwitter />
      </a>
    </StyledDiv>
  );
};

export default SocialMedia;
