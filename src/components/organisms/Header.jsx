import React from "react";
import styled from "styled-components";
import { TextHeading, Typography } from "../atoms/Typography/Typography";
import Navbar from "../molecules/Navbar";
import img from "../../assets/colorsplash.png";
import { pxToEm } from "../../utils";
import { Button } from "../atoms/Button";

const StyledHeader = styled.header`
  padding: 2rem 4rem;
  width: 100%;
  height: 100vh;
  justify-content: flex-start;
  background: url(${img}) no-repeat 160% 50%;
  background-size: 40rem;

  .header-content {
    padding: 10rem 4rem;
  }
  .header-text {
    font-family: "Nunito Sans", sans-serif;
  }
  .header-image {
    width: 45%;

    img {
      width: 100%;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader className="flex-column-spaced">
      <Navbar />
      <div className="header-content flex-spaced" style={{ width: "100%" }}>
        <div className="header-text">
          <Typography
            content={"Hi there i'm"}
            size={35}
            weight="600"
            // style={{ marginBottom: "1rem" }}
          />
          <TextHeading
            content={"samson."}
            level="1"
            size={140}
            style={{ marginBottom: "1.5rem" }}
          />
          <TextHeading
            content={"Front end Developer and Writer"}
            textColor="cyan"
            level="2"
            weight="600"
            style={{ marginBottom: "1rem" }}
          />
          <Button text="Hire Me" />
        </div>
        <div className="header-image" style={{ width: "35%" }}></div>
      </div>
    </StyledHeader>
  );
};

export default Header;
