import styled from "@emotion/styled";
import React, { useEffect } from "react";

import Container from "./Container";
import Footer from "./Footer";
import * as HtmlTemplate from "./HtmlTemplate";
import Navbar from "./Navbar";
import Page from "./Page";
import theme from "../theme";

import "../asset/prism";

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
    page: { title, publishedOn },
    project: { name, githubUrl }
  },
  children
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Page>
      <header>
        <Navbar projectName={name} githubUrl={githubUrl} />
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
      <Footer />
    </Page>
  );
};
