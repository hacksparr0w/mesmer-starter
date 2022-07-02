import styled from "@emotion/styled";
import React from "react";

import {
  Code,
  Container,
  HtmlTemplate,
  Footer,
  Navbar,
  Page,
  PostCard,
  Tweemoji
} from "../component";

import theme from "../theme";

export const metadata = {
  title: "Welcome to Mesmer!"
};

export const template = HtmlTemplate;

const Hero = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  text-align: center;

  & > h1 {
    margin-top: 20px;

    font-size: 56px;
  }

  & > p {
    font-size: 20px;
    color: ${theme.color.text.secondary}
  }
`;

const Posts = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  & > a:first-of-type {
    margin-top: 40px;
  }

  & > a:not(:first-of-type) {
    margin-top: 20px;
  }
`;

export default ({
  metadata: {
    page: { moduleFilePath },
    pages,
    project: { name, githubUrl }
  }
}) => {
  const posts = pages.filter(
    ({ documentFilePath }) => documentFilePath.includes("post")
  );

  return (
    <Page>
      <header>
        <Navbar
          projectName={name}
          githubUrl={githubUrl}
        />
        <Container>
          <Hero>
            <Tweemoji size="big" emoji="butterfly" />
            <h1>Welcome to Mesmer!</h1>
            <p>
              This is your first static site generated with Mesmer.
              You can change this page by editing&nbsp;
              <Code>{moduleFilePath}</Code> file. Go nuts!
            </p>
          </Hero>
        </Container>
      </header>
      <main>
        <Container>
          <Posts>
            <h2>Posts</h2>
            {posts.map(post => {
              const { documentFilePath } = post;

              return (
                <PostCard key={documentFilePath} post={post} />
              )
            })}
          </Posts>
        </Container>
      </main>
      <Footer />
    </Page>
  );
};
