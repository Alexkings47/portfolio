import React from "react";
import styled from "styled-components";
import {
  TextHeading,
  Typography,
} from "../../components/atoms/Typography/Typography";
import bgimg from "../../assets/colorsplash.png";
import hand from "../../assets/wavinghand.png";
import { pxToEm } from "../../utils";
import { Button } from "../../components/atoms/Button";

const StyledHeader = styled.header`
  padding: 8rem 1rem 4rem;
  width: 100%;
  height: calc(100vh - 50px);
  justify-content: space-between;
  /* background: url(${bgimg}) no-repeat 100% 50%; */
  background-size: 40rem;

  .header-content {
  }
  .header-text {
    font-family: "Poppins", sans-serif;
    align-items: flex-start;
    width: 100%;
    /* border: 1px solid red; */
  }
`;

const Header = () => {
  return (
    <StyledHeader className="flex-column-spaced">
   
      {/* <div className="header-content flex-spaced" style={{ width: "100%" }}> */}
        <div className="header-text flex-column-spaced">
          <Typography size={28} weight="600">
            Hi there,
            <img src={hand} alt="waving hand" style={{ width: "50px" }} />
            i'm
          </Typography>
          <TextHeading
            content={"Samson eze."}
            level="1"
            size={110}
            style={{ lineHeight: "98%" }}
          />

          <TextHeading
            textColor="cyan"
            level="2"
            weight="600"
            size={28}
            style={{ marginBottom: `${pxToEm(10)}` }}
          >
            Software Engineer and Content Writer
            {/* <img src={laptop} alt="waving hand" style={{ width: "50px" }} /> */}
          </TextHeading>
          <Typography
            style={{ marginBottom: `${pxToEm(20)}`, width: "55%" ,   fontFamily: "'Karla', sans-serif"}}
            textColor="gray"
          >
            I am an innovative front-end developer with a stiff inclination for
            best practices. Fasten your seat beats as you embark on my
            roller-coaster ride...
          </Typography>
          <Button text="Hire Me" style={{ marginTop: `${pxToEm(10)}` }} />
        </div>
        {/* <div className="header-image" style={{ width: "35%" }}></div> */}
      {/* </div> */}
      <div style={{ width: "100%", border: `1px solid var(--gray)` }}></div>
    </StyledHeader>
  );
};

export default Header;
