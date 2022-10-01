import React from "react";
import styled from "styled-components";
import Navbar from "../../components/molecules/Navbar";
import Container from "../../components/organisms/Container";
import AboutMe from "./AboutMe";
import Header from "./Header";

const StyledMain = styled.main`
  position: relative;
  .space {
    position: absolute;
    top: 30%;
    left: 30%;
    width: 70%;
    z-index: -1;
  }
`;

const Home = () => {
  return (
    <StyledMain>
      <Navbar />
      <Container>
        <Header />
      </Container>
      <Container>
        <AboutMe />
      </Container>
    </StyledMain>
  );
};

export default Home;
