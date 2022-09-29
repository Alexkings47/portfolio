import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import {pxToEm} from "../../utils"

interface Props {
  content?: string;
  loading?: { loader: any; state: boolean } | boolean;
  secondary?: boolean;
}

export type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  position: relative;
  padding: ${pxToEm(14)} ${pxToEm(82)};
  text-transform: capitalize;
  text-align: center;
  font-size: ${pxToEm(20)};
  font-weight: 500;
  background-color: var(--blue);
  border-radius: 29px;
  font-family: "Montserrat", sans-serif;
  color: white;
`;

export const Button = ({ text, children }) => {
  return <StyledButton>{text || children}</StyledButton>;
};
