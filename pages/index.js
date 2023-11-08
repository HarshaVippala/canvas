import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import styles from "/styles/Home.module.css";
import Head from "next/head";
import Sidebar from "../components/sidebar";
import Link from "next/link";

export default function LandingPage() {
  const [typedText, setTypedText] = useState("");
  const [completedFirstText, setCompletedFirstText] = useState(false);

  const targetText = "Haarsha Vippala";
  const subTargetText = " Software Engineer";

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (!completedFirstText) {
        if (index < targetText.length) {
          setTypedText((prevText) => prevText + targetText.charAt(index));
          index++;
        } else {
          setCompletedFirstText(true);
        }
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [completedFirstText]);

  return (
    <div className={styles.container}>
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
        <div className={styles.textContainer}>
          <h1 id="typed-output" className={styles.h1}>
            <img
              id="zoom-image"
              src="/pixelup.jpg"
              alt="my picture"
              className={styles.myimage}
            />
            {typedText}
          </h1>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={`${styles.button} ${styles.active}`}>
            About Me
          </button>
          <Link href="/experiences">
            <button className={styles.button}>Experience</button>
          </Link>
          <Link href="projects">
            <button className={styles.button}>Projects</button>
          </Link>
          <Link href="/hireMe">
            <button className={styles.button}>Hire me</button>
          </Link>
        </div>
      </div>
      <div className={styles.bottomContainer}></div>
      <Analytics />
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; 2023 Your's truly. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
