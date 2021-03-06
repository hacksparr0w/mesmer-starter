import styled from "@emotion/styled";
import React from "react";

import {
  Code,
  Container,
  Footer,
  Navbar,
  Page,
  PostCard,
  Tweemoji
} from "../component";

import { HtmlTemplate } from "../partial";
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
  const { documentFileUrl: indexUrl } = pages[0];
  const posts = pages.filter(
    ({ moduleFilePath }) => moduleFilePath.includes("post")
  );

  return (
    <Page>
      <header>
        <Navbar
          projectName={name}
          githubUrl={githubUrl}
          indexUrl={indexUrl}
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
              const { documentFileUrl } = post;

              return (
                <PostCard key={documentFileUrl} post={post} />
              )
            })}
          </Posts>
        </Container>
      </main>
      <Footer githubUrl={githubUrl} />
    </Page>
  );
};
