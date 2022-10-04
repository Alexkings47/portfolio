import React from "react";
import { TextHeading, Typography } from "../../components/atoms/Typography/Typography";
import styled from "styled-components";
import alex from "../../assets/alex.jpeg";

const StyledDiv = styled.div`
  padding: 2rem 1rem 6rem;
  color: var(--gray-3);
  font-family: "Karla";
  font-size: 18px;

  .about-me {
    position: relative;
    z-index: 0;
    margin-bottom: 3rem;
  }
  .about-me::after {
    content: "ABOUT ME";
    position: absolute;
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
  .my-image {
    width: 18rem;
    border-radius: 15px;
    position: relative;
    filter: saturate(50%);

    &:hover {
      filter: unset;
    }
  }
`;

const AboutMe = () => {
  return (
    <StyledDiv>
      <TextHeading
        content=" About Me"
        size="120"
        weight="600"
        className="about-me"
        textColor="grey-text"
      />
      <div className="content flex-spaced">
        <div className="aboutme-text flex-column-spaced ">
          <p style={{ width: "65%" }}>
            <p></p>
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
            style={{ color: "var(--grey)" , paddingTop: "1.5rem"}}
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
