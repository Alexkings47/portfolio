import React from "react";
import styled from "styled-components";
import {pxToEm} from "../../utils"



const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  position: relative;
  padding: ${pxToEm(8)} ${pxToEm(28)};
  text-transform: capitalize;
  text-align: center;
  font-size: ${pxToEm(20)};
  font-weight: 500;
  font-size: 16px;
  border: 1px solid var(--cyan);
  border-radius: 29px;
  font-family: "Karla", sans-serif;
  color: var(--cyan);

  &:hover {
    background-color: var(--cyan);
    color: var(--grey-3);
  }
`;

export const Button = ({ text, children, style, }) => {
  return <StyledButton style={{...style}}>{text || children}</StyledButton>;
};
