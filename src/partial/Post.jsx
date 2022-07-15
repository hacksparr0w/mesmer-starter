import styled from "@emotion/styled";
import React, { useEffect } from "react";

import * as HtmlTemplate from "./HtmlTemplate";
import "../asset/prism";
import { Container, Footer, Navbar, Page } from "../component";
import theme from "../theme";

export const template = HtmlTemplate;

const Main = styled.main`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const PostHeader = styled.div`
  & > p {
    color: ${theme.color.text.secondary};
  }
`;

const PostContent = styled.div`
  margin-top: 40px;

  & > *:not(:first-child) {
    margin-top: 20px;
  }
`;

export default ({
  metadata: {
    pages,
    page: { title, publishedOn },
    project: { name, githubUrl }
  },
  children
}) => {
  const { documentFileUrl: indexUrl } = pages[0];

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Page>
      <header>
        <Navbar
          projectName={name}
          githubUrl={githubUrl}
          indexUrl={indexUrl}
        />
      </header>
      <Main>
        <Container>
          <PostHeader>
            <h1>
              {title}
            </h1>
            <p>Published on {publishedOn}</p>
          </PostHeader>
          <PostContent>
            {children}
          </PostContent>
        </Container>
      </Main>
      <Footer githubUrl={githubUrl} />
    </Page>
  );
};
