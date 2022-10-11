import React, { useState } from "react";
import styled from "styled-components";
import Featured from "../components/organisms/Featured/Featured";
import Navbar from "../components/molecules/Navbar";
import Container from "../components/organisms/Container";
import { SocialMedia } from "../components/organisms/SocialMedia";
import AboutMe from "../components/organisms/AboutMe";
import ContactMe from "../components/organisms/ContactMe";
import Header from "../components/organisms/Header";
import star from "../assets/bubble.jfif";

const StyledMain = styled.main`
  position: relative;
  padding: 0 3rem;
`;

const Home = () => {
  const [theme, setTheme] = useState(true);

  return (
    <StyledMain
      theme={theme}
      style={{
        color: theme ? "white" : "var(--blue)",
        background: theme
          ? `linear-gradient(var(--purple-background), var(--purple-background) ), url(${star}) no-repeat center`
          : "linear-gradient(var(--white), var(--white) )",
        backgroundSize: "cover",
      }}
    >
      <SocialMedia />
      <Navbar setTheme={setTheme} theme={theme} />
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
