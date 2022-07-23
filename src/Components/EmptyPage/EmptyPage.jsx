import React from "react";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

export const EmptyPage = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}