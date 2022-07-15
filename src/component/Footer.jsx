import styled from "@emotion/styled";
import React from "react";

import Container from "./Container";
import Tweemoji from "./Tweemoji";
import theme from "../theme";

const Footer = styled.footer`
  padding-top: 60px;
  padding-bottom: 40px;
  text-align: center;

  & p {
    color: ${theme.color.text.secondary};
  }

  & a {
    color: ${theme.color.text.secondary};
    box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), 0 1px 0
      ${theme.color.text.secondary};

    &:hover {
      color: ${theme.color.text.accent};
      box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), 0 1px 0
        ${theme.color.text.accent};
    }
  }

  & img {
    vertical-align: sub;
  }
`;

export default ({ githubUrl }) => (
  <Footer>
    <Container>
      <p>
        Created with <Tweemoji emoji="red-heart" />, powered by&nbsp;
        <a href={githubUrl}>Mesmer</a>.
      </p>
    </Container>
  </Footer>
);
