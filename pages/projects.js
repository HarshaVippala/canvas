import React from "react";
import Sidebar from "../components/sidebar";
import styles from "/styles/projects.module.css";
import Head from "next/head";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Projects</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.topContainer}>
        <div className={styles.buttonsContainer}>
          <Link href="/">
            <button className={styles.button}>About Me</button>
          </Link>
          <Link href="/experiences">
            <button className={styles.button}>Experience</button>
          </Link>
          <button className={styles.projectsButton}>Projects</button>
        </div>
      </div>
      <Sidebar />
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          &copy; 2023 Your's truly.
        </p>
      </footer>
    </div>
  );
}
