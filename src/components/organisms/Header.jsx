import React from "react";
import styled from "styled-components";
import {
  TextHeading,
  Typography,
} from "../../components/atoms/Typography/Typography";
import bgimg from "../../assets/backgroundleft.png";
import hand from "../../assets/wavinghand.png";
import { pxToEm } from "../../utils";
import { Button } from "../../components/atoms/Button";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  padding: 8rem 1rem 3rem;
  width: 100%;
  height: calc(100vh - 50px);
  justify-content: space-between;
  background: url(${bgimg}) no-repeat 100% 50%;
  background-size: 20rem;
  position: relative;

  @keyframes move {
    0% {
      transform: translateY(1rem);
    }
    100% {
      transform: translateY(-1rem);
    }
  }

  .arrow-trans {
    position: absolute;
    animation: move linear 2s none infinite;
    animation-delay: 3000ms;
    bottom: 6rem;
    right: -5rem;
    font-size: 60px;
    font-weight: 600;
    color: white;
  }

  .header-text {
    font-family: "Poppins", sans-serif;
    align-items: flex-start;
    width: 100%;
  }
`;

const Header = () => {
  return (
    <StyledHeader className="flex-column-spaced">
      <div className="header-text flex-column-spaced">
        <Typography size={24} weight="600">
          Hi there,
          <img src={hand} alt="waving hand" style={{ width: "50px" }} />
          i'm
        </Typography>
        <TextHeading
          content={"samson."}
          level="1"
          size={80}
          style={{
            lineHeight: "99%",
            marginLeft: "-10px",
            marginBottom: `${pxToEm(10)}`,
          }}
        />

        <Typography
          textColor="cyan"
          level="2"
          weight="600"
          size={24}
          style={{ marginBottom: `${pxToEm(10)}` }}
        >
          Software Engineer & Content Writer
          {/* <img src={laptop} alt="waving hand" style={{ width: "50px" }} /> */}
        </Typography>
        <Typography
          size="18"
          style={{
            marginBottom: `${pxToEm(20)}`,
            width: "45%",
          }}
          textColor="gray"
        >
          I am an innovative front-end developer with a stiff inclination for
          best practices. Fasten your seat beats as you embark on my
          roller-coaster ride...
        </Typography>
        <Button text="Hire me" style={{ marginTop: `${pxToEm(10)}` }} />
      </div>
      {/* <div className="header-image" style={{ width: "35%" }}></div> */}
      {/* </div> */}
      <div
        style={{ width: "100%", borderBottom: `1px solid var(--gray)` }}
      ></div>
      <Link className="arrow-trans">
        <HiOutlineArrowNarrowDown />
      </Link>
    </StyledHeader>
  );
};

export default Header;
