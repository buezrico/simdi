import Head from "next/head";
import React from "react";
import NavbarComp from "./NavbarComp";

const AboutComp = () => {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/images/logo.ico" />
      </Head>
      <main className="about">
        <div className="inner">
          <div className="container">
            <div className="about-text">
              <div className="about-title">
                <h4 className="mb-4 styled-text">About Me</h4>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
                eaque autem similique eveniet magni? Amet alias illo ipsum illum
                rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium, magni placeat atque sed non quasi, unde quod
                reiciendis, deleniti architecto vel mollitia libero ex. Porro
                earum inventore et asperiores unde fugiat, doloremque quisquam
                laudantium voluptas, voluptate nisi tenetur ea! Suscipit!
              </p>
            </div>
            {/* <div className="about-pic"></div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutComp;
