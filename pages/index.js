import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import styles from "/styles/Home.module.css";
import Head from "next/head";
import Sidebar from "../components/sidebar";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <div className={styles.topContainer}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Harsha Vippala | Software Engineer </title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Sidebar />
        <div>
          <img
            id="zoom-image"
            src="/pixelup.jpg"
            alt="my picture"
            className={styles.myimage}
          />
          <h1 id="typed-output" className={styles.h1}>
            Harsha Vippala
          </h1>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.aboutButton}>About Me</button>
          <Link href="/experiences">
            <button className={styles.button}>Experience</button>
          </Link>
          <Link href="projects">
            <button className={styles.button}>Projects</button>
          </Link>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <h1 className={styles.aboutHeading}> Hey! </h1>
        <p className={styles.aboutText}>
          I'm Harsha Vippala, a Software Engineer from Dallas, Texas.With over
          five years of experience, I've had the opportunity to delve into
          various aspects of software engineering, from back-end frameworks like
          NestJS and Spring to front-end technologies including ReactJS and
          Next.js. My roles at Liberty Mutual Insurance and American Express
          have not only sharpened my technical skills but also taught me the
          value of teamwork and adaptability in delivering effective software
          solutions.
        </p>
        <p className={styles.aboutText}>
          But there's more to me than just coding. Away from the keyboard, you
          can find me jamming at music concerts, watching football and F1. These
          hobbies are not just pastimes; they're a reflection of my belief in
          enjoying every aspect of life, bringing a similar energy and
          enthusiasm to my professional work. I thrive on the excitement of new
          challenges and enjoy exploring the synergies between technology and
          everyday life.
        </p>
      </div>
      <Analytics />
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; 2023 Your's truly. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
