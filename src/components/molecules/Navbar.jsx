import React from "react";
import styled from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { GiQueenCrown } from "react-icons/gi";
import { Typography } from "../atoms/Typography/Typography";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 0 2rem;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;

  span {
    font-size: 40px;
  }
`;

const Navbar = ({ setTheme, theme }) => {
  return (
    <StyledNav
      style={{
        color: theme ? "white" : "var(--blue)",
        // background: theme
        //   ? "linear-gradient(var(--purple-background), var(--purple-background) ), url(${star}) no-repeat center"
        //   : "linear-gradient(var(--white), var(--white) )",
      }}
    >
      <Typography textColor={"cyan"} size="40">
        <GiQueenCrown />
      </Typography>
      <div className="flex-spaced" style={{ width: "8rem" }}>
        <span
          onClick={() => setTheme(!theme)}
          style={{ color: theme ? "var(--cyan)" : "var(--purple)" }}
        >
          {theme ? <BsSun /> : <BsMoon />}
        </span>
        <span style={{ color: "var(--cyan)" }}>
          <CgMenuRightAlt />
        </span>
      </div>
    </StyledNav>
  );
};

export default Navbar;
