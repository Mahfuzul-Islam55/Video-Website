import React, { Fragment } from "react";

interface props {
  title?: string;
  link?: string;
}
const Player = ({ title, link }: props) => {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={link}
      title={title}
      frameBorder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Player;
