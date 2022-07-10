import "./Main.css";
import React from "react";
import {Greeting} from "../Greeting/Greeting";
import {About} from "../About/About";

export const Main = () => {
  return (
    <main>
      <Greeting/>
      <About />
    </main>
  );
};