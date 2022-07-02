import React from "react";

import githubIconImage from "../asset/font-awesome/github.svg";
import starIconImage from "../asset/font-awesome/star.svg";

const IMAGES = {
  "github": githubIconImage,
  "star": starIconImage
};

export default ({ icon }) => {
  const image = IMAGES[icon];

  if (!image) {
    throw new Error(`Unknown icon '${icon}'`);
  }

  return (
    <img width={20} src={image} />
  );
};
