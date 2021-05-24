import React, { Fragment } from "react";
import NavbarComp from "../components/NavbarComp";
import "../styles/globals.scss";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <NavbarComp />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
