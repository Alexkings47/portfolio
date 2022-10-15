import React, { useState, useEffect } from "react";
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
  width: 100vw;
`;

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, ms);
  };
}


const Home = () => {
  const [theme, setTheme] = useState(true);
  const [screen, setScreen] = useState(window.innerWidth);
  useEffect(() => {
    const debouncedHandleResize = debounce(function resize() {
      setScreen(window.innerWidth);
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);
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
        <Header screen={screen} />
      </Container>
      <Container>
        <AboutMe screen={screen} />
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
