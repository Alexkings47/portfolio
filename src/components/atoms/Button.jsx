import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import {pxToEm} from "../../utils"



const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  position: relative;
  padding: ${pxToEm(14)} ${pxToEm(82)};
  text-transform: capitalize;
  text-align: center;
  font-size: ${pxToEm(20)};
  font-weight: 500;
  background-color: var(--green);
  border-radius: 29px;
  font-family: "karla", sans-serif;
  color: white;
`;

export const Button = ({ text, children, style, ...rest }) => {
  return <StyledButton style={{...rest}}>{text || children}</StyledButton>;
};
