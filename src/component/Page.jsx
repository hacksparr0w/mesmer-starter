import React from "react";

import { Global, css } from "@emotion/react";

import theme from "../theme";

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.typography.default.fontFamily};

    color: ${theme.color.text.primary};
    font-size: ${theme.typography.default.fontSize};
    font-weight: ${theme.typography.default.fontWeight};
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    transition: box-shadow, color .2s ease-in-out;
    box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), 0 1px 0
      ${theme.color.text.primary};

    color: ${theme.color.text.primary};

    &:hover {
      color: ${theme.color.text.accent};
      box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), 0 1px 0
        ${theme.color.text.accent};
    }

    &:visited {
      text-decoration: none;
    }
  }

  h1 {
    font-size: ${theme.typography.h1.fontSize};
    font-weight: ${theme.typography.h1.fontWeight};
  }

  h2 {
    font-size: ${theme.typography.h2.fontSize};
    font-weight: ${theme.typography.h2.fontWeight};
  }

  h3 {
    font-size: ${theme.typography.h3.fontSize};
    font-weight: ${theme.typography.h3.fontWeight};
  }

  small {
    font-size: ${theme.typography.small.fontSize};
  }
`;

export default ({ children }) => (
  <>
    <Global styles={GlobalStyles} />
    {children}
  </>
);
