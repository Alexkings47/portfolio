import React from "react";
import styled from "styled-components";
import {
  TextHeading,
  Typography,
} from "../../components/atoms/Typography/Typography";
import { MediaIcons } from "../../components/organisms/SocialMedia";
import coffee from "../../assets/Icons/coffee.svg";

const StyledSection = styled.section`
  padding-block: 4rem;

  .media {
    .media-icons {
      margin-right: 1rem;
      font-size: 24px;
    }
  }
  .coffee {
    cursor: pointer;
    align-items: center;
    background-color: var(--gray);
    padding: 10px 1rem;
    color: var(--purple);
    border-radius: 5px;
  }
  .contact-details {
    height: 15rem;
    align-items: flex-end;
    padding-left: 1rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: space-between;

    .contact-details {
      align-items: center;
      margin-top: 2rem;
      padding-left: unset;
    }
  }
`;

const ContactMe = () => {
  return (
    <StyledSection className="contact-div flex-spaced">
      <div className="contact-titles flex-column-spaced">
        <TextHeading
          size="70"
          style={{ textTransform: "capitalize", textAlign: "center", lineHeight: "" }}
        >
          Want to Start <br /> A new <br /> project
        </TextHeading>
        <Typography
          content="Or Say Hi"
          size="24"
          style={{ fontFamily: "Roboto Slab", marginTop: "2rem" }}
          weight="500"
        />
      </div>
      <div className="contact-details flex-column-spaced">
        <a href="mailto: alexezetech@gmail.com">
          <Typography content="alexezetech@gmail.com" size="24" weight="500" />
        </a>
        <MediaIcons className="media" />
        <button className="coffee flex-spaced">
          <img src={coffee} alt="coffee" />
          <Typography content="Buy Me A Coffee" size="14" />
        </button>
      </div>
    </StyledSection>
  );
};

export default ContactMe;
