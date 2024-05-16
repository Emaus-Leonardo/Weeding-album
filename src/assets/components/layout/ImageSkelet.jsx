import React, { useEffect, useState } from "react";

import { Blurhash } from "react-blurhash";

export default function ImageSkelet({ src }) {
  const [imageLoad, setImageLoad] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoad(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imageLoad ? (
        <Blurhash
          className="animate-pulse rounded-lg"
          hash={`LcLNVjxtWARj~oR*oJofjDj]flfl`}
          width={242}
          height={323}
          resolutionX={31}
          resolutionY={31}
          punch={1}
        />
      ) : (
        <img
          src={src}
          className="hover:scale-105 hover:shadow-2x1 transition-all rounded-lg cursor-pointer"
        />
      )}
    </>
  );
}
