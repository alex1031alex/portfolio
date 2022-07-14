import "./Work.css";
import React from "react";

export const Work = ({work}) => {

  return (
    <div className="work">
      <h3 className="work__title">{work.name}</h3>
      <p className="work__image-container">
        {work.image && <img src={work.image} />}
      </p>
    </div>
  );
};