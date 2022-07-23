import "./Main.css";
import React from "react";
import {Greeting} from "../Greeting/Greeting";
import {About} from "../About/About";
import {Works} from "../Works/Works";
import {Contacts} from "../Contacts/Contacts";

export const Main = () => {
  return (
    <main>
      <Greeting/>
      <About />
      <Works />
      <Contacts />
    </main>
  );
};