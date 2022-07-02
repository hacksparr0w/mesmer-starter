import styled from "@emotion/styled";
import React from "react";

import { FaIcon } from "../component";
import theme from "../theme";

const Nav = styled.nav`
  padding: 60px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    box-shadow: none;

    &:hover {
      color: ${theme.color.text.primary};
    }
  }

  & > div:first-of-type {
    p {
      font-size: ${theme.typography.h3.fontSize};
      font-weight: ${theme.typography.h3.fontWeight};
    }
  }

  & > div:last-of-type {
    ul {
      display: flex;
      align-items: center;
      list-style-type: none;
    }

    li:not(:first-of-type) {
      margin-left: 30px;
    }
  }
`;

export default ({ projectName, githubUrl }) => (
  <Nav>
    <div>
      <p>
        <a href="/index.html">
          {projectName}
        </a>
      </p>
    </div>
    <div>
      <ul>
        <li>
          <a href={githubUrl}>
            <FaIcon icon="github"/>
          </a>
        </li>
        <li>
          <a href={`${githubUrl}/stargazers`}>
            <FaIcon icon="star"/>
          </a>
        </li>
      </ul>
    </div>
  </Nav>
);
