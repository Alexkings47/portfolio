import React, { useState } from "react";
import styled from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";
import { RiMenu5Fill } from "react-icons/ri";
import { Typography } from "../atoms/Typography/Typography";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    font-size: 40px;
  }
`;

const Navbar = () => {
  const [theme, setTheme] = useState(true);
  return (
    <StyledNav>
      <Typography textColor={"pink"} size="20">
        Axel inc!
      </Typography>
      <div className="flex-spaced" style={{ width: "8rem" }}>
        <span
          onClick={() => setTheme(!theme)}
          style={{ color: theme ? "white" : "cyan" }}
        >
          {theme ? <BsSun /> : <BsMoon />}
        </span>
        <span>
          <RiMenu5Fill />
        </span>
      </div>
    </StyledNav>
  );
};

export default Navbar;
