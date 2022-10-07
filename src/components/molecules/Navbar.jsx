import React, { useState } from "react";
import styled from "styled-components";
import { BsFillSunFill, BsMoon } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { GiQueenCrown } from "react-icons/gi";
import { Typography } from "../atoms/Typography/Typography";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 0 10px;
  height: 5rem;

  span {
    font-size: 40px;
  }
`;

const Navbar = () => {
  const [theme, setTheme] = useState(true);
  return (
    <StyledNav>
      <Typography textColor={"cyan"} size="40">
        <GiQueenCrown />
      </Typography>
      <div className="flex-spaced" style={{ width: "8rem" }}>
        <span
          onClick={() => setTheme(!theme)}
          style={{ color: theme ? "white" : "cyan" }}
        >
          {theme ? <BsFillSunFill /> : <BsMoon />}
        </span>
        <span>
          <CgMenuRightAlt />
        </span>
      </div>
    </StyledNav>
  );
};

export default Navbar;
