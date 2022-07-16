import "./About.css";
import React from "react";

export const About = () => {
  return (
    <section id="about" className="about main__about">
      <div className="container">
        <h2 className="about__title">About me</h2>
        <p className="about__text about__text--top">
          I'am Alexey Alexandrov, frontend-developer from Minsk. I've been doing web
          development as a hobby since 2016. I create both static websites (including responsive and adaptive)
          and single-page applications. I enjoy coding.
        </p>
        <div className="about__skills">
          <div className="about__skills-group">
            <h3 className="about__subtitle">Languages</h3>
            <ul>
              <li>
                <p className="about__text">HTML</p>
              </li>
              <li>
                <p className="about__text">CSS</p>
              </li>
              <li>
                <p className="about__text">Sass</p>
              </li>
              <li>
                <p className="about__text">TypeScript</p>
              </li>
            </ul>
          </div>
          <div className="about__skills-group">
            <h3 className="about__subtitle">Frameworks/libraries</h3>
            <ul>
              <li>
                <p className="about__text">Material UI</p>
              </li>
              <li>
                <p className="about__text">React JS</p>
              </li>
              <li>
                <p className="about__text">Redux</p>
              </li>
              <li>
                <p className="about__text">Axios</p>
              </li>
            </ul>
          </div>
          <div className="about__skills-group">
            <h3 className="about__subtitle">Dev Tools</h3>
            <ul>
              <li>
                <p className="about__text">WebShtorm</p>
              </li>
              <li>
                <p className="about__text">VS Code</p>
              </li>
              <li>
                <p className="about__text">Codepen</p>
              </li>
              <li>
                <p className="about__text">Github</p>
              </li>
              <li>
                <p className="about__text">Gitlab</p>
              </li>
              <li>
                <p className="about__text">Terminal</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};