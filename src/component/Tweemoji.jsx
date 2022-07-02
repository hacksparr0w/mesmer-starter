import React from "react";

import butterflyImage from "../asset/tweemoji/butterfly.svg";
import redHeartImage from "../asset/tweemoji/red-heart.svg";
import wavingHandImage from "../asset/tweemoji/waving-hand.svg";

const EMOJI_IMAGES = {
  "butterfly": butterflyImage,
  "red-heart": redHeartImage,
  "waving-hand": wavingHandImage
};

const EMOJI_SIZES = {
  "small": 20,
  "medium": 60,
  "big": 180
};

export default ({ size = "small", emoji }) => {
  const image = EMOJI_IMAGES[emoji];
  const width = EMOJI_SIZES[size];

  if (!image) {
    throw new Error(`Unknown emoji '${emoji}'`);
  }

  if (!width) {
    throw new Error(`Invalid emoji size '${size}'`);
  }

  return (
    <img width={width} src={image} />
  );
};
