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
            Harsha Vippala
          </h1>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.button}>About Me</button>
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
      <div className={styles.bottomContainer}>
        <h1 className={styles.aboutHeading}> Hey! </h1>
        <p className={styles.aboutText}>
          I'm Harsha Vippala, a Software Engineer based in Dallas, Texas,
          specializing in building (and occasionally designing) exceptional
          websites, and everything in between.
        </p>
        <p className={styles.aboutText}>
          With 5 years of experience in software engineering, I've honed my
          skills in crafting reliable and secure software solutions. By day, I'm
          immersed in the world of software development, working on back-end
          application development using JavaScript, Java, TypeScript and Python.
          I'm well-versed in frameworks like NestJS, React, Spring, Next.js,
          GraphQL, and gRPC, and I'm proficient with databases like SQL,
          Redshift, MongoDB, Postgres, and DynamoDB.
        </p>
        <p className={styles.aboutText}>
          But when I'm not debugging life's challenges, you can catch me at
          music concerts, passionately cheering for machester city and redbull.
          This is my little corner of the internet where the binary world of
          coding seamlessly mingles with the colorful world of music, sports,
          and f1.Welcome to my digital realm! 🎮🎶⚽🏎️"
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
