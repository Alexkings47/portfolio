import React from "react";
import styled from "styled-components";
import bouncer from "../../assets/bouncer.png";
import FeaturedCard from "./FeaturedCard";

const StyledSection = styled.section``;

const List = [
  {
    skills: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    desc: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
  },
];

const Featured = () => {
  return (
    <StyledSection className="flex-column-spaced">
      <FeaturedCard
        title="Item 1"
        imgUrl={bouncer}
        content={List[0].skills}
        desc={List[0].desc}
      />
      {/* <FeaturedCard /> */}
    </StyledSection>
  );
};

export default Featured;
