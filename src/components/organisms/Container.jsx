import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 4rem;

  @media (max-width: 600px) {
    padding: 0 15px;
  }
`;

const Container = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Container;
