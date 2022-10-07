import React from "react";
import styled from "styled-components";
import bouncer from "../../../assets/bouncer.png";
import zenus from "../../../assets/zenus.png";
import { TextHeading } from "../../atoms/Typography/Typography";
import FeaturedCard from "./FeaturedCard";

const StyledSection = styled.section`
  .about-me {
    position: relative;
    z-index: 0;
    margin-bottom: 3rem;
    text-align: left;
    align-self: flex-start;
  }
  .about-me::after {
    content: "Featured Projects";
    position: absolute;
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
`;

const List = [
  {
    skills: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    desc: "An e-commerce platform that automates the process of buying and selling goods and services, built with React JS, Typescript, react-redux, and Git",
    title: "Bouncer",
    imgUrl: bouncer,
  },
  {
    skills: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    desc: "An e-commerce platform that automates the process of buying and selling goods and services, built with React JS, Typescript, react-redux, and Git",
    title: "Zenus Estate Financials",
    imgUrl: zenus,
  },
];

const Featured = () => {
  return (
    <StyledSection className="flex-column-spaced" style={{ margin: "5rem 0" }}>
      <TextHeading
        content="Featured Projects"
        size="120"
        weight="600"
        className="about-me"
        textColor="grey-text"
      />{" "}
      <TextHeading />
      {List.map((item) => {
        return (
          <FeaturedCard
            title={item.title}
            imgUrl={item.imgUrl}
            content={item.skills}
            desc={item.desc}
          />
        );
      })}
    </StyledSection>
  );
};

export default Featured;
