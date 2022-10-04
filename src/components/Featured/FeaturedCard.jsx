import React from "react";
import styled from "styled-components";
import { Typography } from "../atoms/Typography/Typography";
import { VscGithubAlt } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

const StyledDiv = styled.div`
  padding: 2rem;
  width: 100%;
  
  .feat-text > * {
    margin-bottom: 1rem;
  }
  .description {
    text-align: right;
    background-color: var(--blue);
    padding: 2.5rem 1rem 2.5rem 5rem;
    width: 110%;
    z-index: 10;
    font-size: 16px;
  }
  ul {
    list-style-type: none;

    li {
      margin-left: 1rem;
    }
  }

  .feat-icons {
    button {
      font-size: 18px;
      color: white;
      margin-left: 1rem;
    }
  }
`;

const FeaturedCard = ({ title, desc, imgUrl, content }) => {
  return (
    <StyledDiv className="flex-spaced">
      <div className="feat-img" style={{ width: "60%" }}>
        <img src={imgUrl} alt={`project`} style={{ width: "100%" }} />
      </div>
      <div
        className="feat-text flex-column-spaced"
        style={{ alignItems: "flex-end" }}
      >
        <Typography content="Featured Project" textColor="cyan" size="12" />
        <Typography content={title} textColor="white" size="20" />
        <div className="description">
          <Typography content={desc} textColor="gray" />
        </div>
        <ul className="flex-spaced">
          {content.map((item, index) => {
            return (
              <li
                className="project-tech"
                alt={`projects ${index}`}
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <div className="feat-icons flex-spaced">
          <button>
            <VscGithubAlt />
          </button>
          <button>
            <FiExternalLink />
          </button>
        </div>
      </div>
    </StyledDiv>
  );
};

export default FeaturedCard;
