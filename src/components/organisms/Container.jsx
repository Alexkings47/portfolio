import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 4rem;

  @media (max-width: 650px) {
    padding: 0 2rem;
  }
`;

const Container = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Container;
