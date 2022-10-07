import React from 'react'
import styled from 'styled-components';

const StyledDiv =styled.div`
    max-width: 1250px;
    margin: 0 auto;
`

const Container = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Container
