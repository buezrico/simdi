import Head from "next/head";
import React from "react";
import NavbarComp from "../components/NavbarComp";
import AboutPage from "../components/AboutComp";
import GalleryComp from "../components/GalleryComp";
import FooterComp from "../components/FooterComp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simdi</title>
        <meta name="description" content="I am Simdi and I am a Model" />
        <link rel="icon" href="/images/logo.ico" />
      </Head>

      <header>
        <NavbarComp />

        <div className="content">
          <div className="container inner">
            <div className="name mb-4">
              <p className="joy styled-text">JOY</p>
              <p className="simdi styled-text">SIMDI</p>
            </div>

            <div className="title text-center text-light mb-3">
              <h4>Nigerian Supermodel &amp; Enterpreneur</h4>
            </div>
            <div className="arrow-down">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <GalleryComp />
      <AboutPage />
      <FooterComp />
    </div>
  );
}
