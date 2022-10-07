import React from "react";
import styled from "styled-components";
import Featured from "../../components/organisms/Featured/Featured";
import Navbar from "../../components/molecules/Navbar";
import Container from "../../components/organisms/Container";
import { SocialMedia } from "../../components/organisms/SocialMedia";
import AboutMe from "../../components/organisms/AboutMe";
import ContactMe from "../../components/organisms/ContactMe";
import Header from "../../components/organisms/Header";

const StyledMain = styled.main`
  position: relative;
  /* padding-bottom: 3rem; */
  /* .space {
    position: absolute;
    top: 30%;
    left: 30%;
    width: 70%;
    z-index: -1;
  } */
`;

const Home = () => {
  return (
    <StyledMain>
      <SocialMedia />
      <Navbar />
      <Container>
        <Header />
      </Container>
      <Container>
        <AboutMe />
      </Container>
      <Container>
        <Featured />
      </Container>
      <Container>
        <ContactMe />
      </Container>
    </StyledMain>
  );
};

export default Home;
