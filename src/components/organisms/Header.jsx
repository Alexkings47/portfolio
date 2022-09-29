import React from "react";
import styled from "styled-components";
import { TextHeading, Typography } from "../atoms/Typography/Typography";
import Navbar from "../molecules/Navbar";

const StyledHeader = styled.header`
  padding: 2rem 4rem;
  width: 100%;
  align-items: stretch;
  height: 100vh;

  .header-text{

  }
`;

const Header = () => {
  return (
    <StyledHeader className="flex-column-spaced">
      <Navbar />
      <div className="header-text">
        <Typography content={"Hi i'm"} size={35} />
        <TextHeading
          content={"Samson Eze"}
          textColor="green"
          level="1"
          size={40}
          style={{ marginBottom: "2rem" }}
        />
        <TextHeading content={"a Front end Developer and Writer"} level="2" />
      </div>
    </StyledHeader>
  );
};

export default Header;
