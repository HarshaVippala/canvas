import React from 'react';
import { Analytics } from '@vercel/analytics/react';
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
      <h2 className={styles.h2}> I'm currently working on it, please check back after November 1st!</h2>
      <Analytics />
    </div>
  );
}