import React from "react";
import { TextHeading, Typography } from "../atoms/Typography/Typography";
import styled from "styled-components";
import alex from "../../assets/alex.jpeg";
import { pxToEm } from "../../utils";

const StyledDiv = styled.div`
  padding: 2rem 0 6rem;
  color: var(--gray-3);
  font-family: "Karla";
  font-size: 18px;

  .about-me {
    position: relative;
    z-index: 0;
    font-size: 120px;
  }
  .about-me::after {
    content: "ABOUT ME";
    position: absolute;
    line-height: 100%;
    text-transform: uppercase;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--cyan);
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 1;
    font-size: 30px;
    font-weight: 600;
    color: var(--white);
  }
  .skills {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    padding-left: 1rem;
    color: var(--gray);
    font-size: 16px;
    text-transform: uppercase;
    /* list-style-image:  */
  }
  .skills-link,
  .skills-link:visited,
  .skills-link:link {
    color: var(--cyan);
    text-decoration: none;
  }
  .aboutme-text {
    align-items: flex-start;
  }
  .content {
    align-items: flex-start;
  }
  .my-image {
    width: 18rem;
    border-radius: 15px;
    position: relative;
    filter: saturate(50%);

    &:hover {
      filter: unset;
    }
  }

  @media (max-width: "") {
    
  }

  @media (max-width: 600px) {
    .about-me {
      font-size: 90px;
      align-items: center;

      &::after{
        font-size: 24px;
        padding-bottom: unset;
      }
    }
    .content {
      flex-direction: column;
      align-items: center;
    }
    .my-image {
      width: 14rem;
    }
  }
`;

const AboutMe = () => {
  return (
    <StyledDiv>
      <TextHeading
        content=" About Me"
        weight="600"
        className="about-me"
        textColor="grey-text"
        style={{justifyContent: "center",    marginBottom: "3rem"}}
      />
      <div className="content flex-spaced">
        <div className="aboutme-text flex-column-spaced ">
          <p style={{ width: `80%`, lineHeight: "30px" }}>
            I'm a Software engineer skilled at replicating user interface
            designs into functional code. I have an in-depth understanding of
            HTML, CSS, JavaScript, and user interface/user experience
            fundamentals.
            <br />
            <br />
            In addition &nbsp;
            <a className="skills-link" href="*">
              to my technical skills
            </a>
            , I work well with teams, pay great attention to detail, and possess
            excellent communication skills. I am also an award-winning writer
            and a critical thinker, making me quite adept at problem solving and
            self-expression. Please find below my resume and a link to my GitHub
            profile for your perusal. I look forward to hearing from you. Thank
            you.
          </p>

          <Typography
            content="Here are a few technologies I’ve been working with recently:"
            style={{ color: "var(--grey)", paddingTop: "1.5rem" }}
          />
          <ul className="skills">
            <li>
              JavaScript <span style={{ color: "cyan" }}>(ES 6+)</span>
            </li>
            <li>React</li>
            <li>Html</li>
            <li>TypeScript</li>
            <li>Axios</li>
            <li>SASS</li>
          </ul>
        </div>
        <img src={alex} alt="my face" className="my-image" />
      </div>
    </StyledDiv>
  );
};

export default AboutMe;
