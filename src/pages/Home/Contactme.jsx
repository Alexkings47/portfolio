import React from "react";
import styled from "styled-components";
import { TextHeading } from "../../components/atoms/Typography/Typography";

// const S

const Contactme = () => {
  return (
    <div className="contact flexed-space">
      <TextHeading content="Got a Project or Job for me" size="70" />
      <div className="contact-details">
        <TextHeading content="alexezetech@gmail.com" size="24" />
      </div>
    </div>
  );
};

export default Contactme;
