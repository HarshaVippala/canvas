import React from 'react';
import styles from '/styles/Home.module.css';
import Head from 'next/head';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Harsha Vippala | Software Engineer </title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <h1 className={styles.h1}> Welcome to my website!</h1>      
      <h2 className={styles.h2}> Currently under development. Please check back after October 1st, I promise it'll be worth it!</h2>
    </div>
  );
}