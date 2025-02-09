import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Privacy.module.css';

export default function Privacy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Privacy Policy | Harsha Vippala</title>
        <meta name="description" content="Privacy Policy for Harsha Vippala's portfolio website" />
      </Head>

      <motion.main 
        className={styles.main}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Privacy Policy</h1>
        
        <div className={styles.content}>
          <section>
            <h2>Information Collection</h2>
            <p>This website collects minimal user data. We use analytics to understand visitor behavior but do not collect personally identifiable information.</p>
          </section>

          <section>
            <h2>Data Usage</h2>
            <p>Analytics data is used solely to improve website performance and user experience. No personal data is sold or shared with third parties.</p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>This website uses essential cookies to ensure proper functionality. Analytics cookies are used to understand user behavior.</p>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul>
              <li>Vercel Analytics for website analytics</li>
              <li>Google Fonts for typography</li>
            </ul>
          </section>

          <section>
            <h2>Contact Information</h2>
            <p>For any privacy-related questions, please contact: harsha.vippala@gmail.com</p>
          </section>

          <section>
            <h2>Updates</h2>
            <p>This privacy policy was last updated on March 15, 2024. We reserve the right to update this policy as needed.</p>
          </section>
        </div>
      </motion.main>
    </div>
  );
} 