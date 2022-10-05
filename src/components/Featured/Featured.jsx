import React from "react";
import styled from "styled-components";
import bouncer from "../../assets/bouncer.png";
import zenus from "../../assets/zenus.png";
import FeaturedCard from "./FeaturedCard";

const StyledSection = styled.section``;

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
    <StyledSection className="flex-column-spaced">
      {List.map((item)=>{
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
