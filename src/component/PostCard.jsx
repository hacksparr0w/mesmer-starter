import styled from "@emotion/styled";
import React from "react";

import Card from "./Card";
import CardAsideContent from "./CardAsideContent";
import CardMainContent from "./CardMainContent";
import Tweemoji from "./Tweemoji";

const PostCardMainContent = styled(CardMainContent)`
  & > div:not(:first-of-type) {
    margin-top: 10px;
  }
`;

export default ({
  post: {
    documentFilePath,
    emoji,
    publishedOn,
    subtitle,
    title,
    topic,
  },
  ...rest
}) => (
  <Card href={documentFilePath} {...rest}>
    <CardAsideContent>
      <Tweemoji size="medium" emoji={emoji} />
    </CardAsideContent>
    <PostCardMainContent>
      <div>
        <h3>{title}</h3>
        <p><small>On {publishedOn} about {topic}</small></p>
      </div>
      <div>
        <p>{subtitle}</p>
      </div>
    </PostCardMainContent>
  </Card>
);
