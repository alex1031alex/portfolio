import "./Main.css";
import React from "react";
import {Greeting} from "../Greeting/Greeting";
import {About} from "../About/About";
import {Works} from "../Works/Works";

export const Main = () => {
  return (
    <main>
      <Greeting/>
      <About />
      <Works />
    </main>
  );
};