import React from "react";
import Head from "next/head";
import Sidebar from "../components/sidebar";
import styles from "/styles/exp.module.css";
import Experience from "../components/exp";

export default function AboutPage() {
  const workExperience = {
    imageSrc: "/liberty.svg",
    companyName: "Liberty Mutual",
    employmentDates: "February 2023 - Present",
    summary: [
      "Developed and maintained APIs built on NestJS.",
      "Designed and implemented a reporting API using AWS Redshift.",
      "Collaborated with external vendor teams for microservices integration.",
    ],
  };

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Background</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.topContainer}>
        <h1 className={styles.h1}> The Story So Far: My Odyssey of Work</h1>
      </div>
      <div className={styles.bottomContainer}>
        <Experience
          imageSrc={workExperience.imageSrc}
          companyName={workExperience.companyName}
          employmentDates={workExperience.employmentDates}
        >
          {workExperience.summary.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </Experience>
        <Experience
          imageSrc={workExperience.imageSrc}
          companyName={workExperience.companyName}
          employmentDates={workExperience.employmentDates}
        >
          {workExperience.summary.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </Experience>
        
      </div>
      <Sidebar />
    </div>
  );
}
