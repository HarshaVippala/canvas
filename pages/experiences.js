import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import styles from '../styles/Experience.module.css';

const experiences = [
  {
    company: 'American Express',
    title: 'Software Engineer',
    period: 'January 2022 - Present',
    points: [
      'Lead development of high-performance web applications using React and Node.js',
      'Implemented microservices architecture improving system scalability by 40%',
      'Mentored junior developers and conducted code reviews',
      'Collaborated with cross-functional teams to deliver enterprise-scale solutions'
    ]
  },
  // Add more experiences here
];

export default function Experience() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Experience | Harsha Vippala</title>
        <meta name="description" content="Harsha Vippala's professional experience" />
      </Head>

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>Where I've Worked</h1>
        
        <div className={styles.experienceContainer}>
          <div className={styles.tabs}>
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.company}
                className={`${styles.tab} ${selectedTab === index ? styles.activeTab : ''}`}
                onClick={() => setSelectedTab(index)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {exp.company}
              </motion.button>
            ))}
          </div>

          <motion.div 
            className={styles.tabContent}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            key={selectedTab}
          >
            <h3 className={styles.role}>
              {experiences[selectedTab].title} 
              <span className={styles.company}>@ {experiences[selectedTab].company}</span>
            </h3>
            <p className={styles.period}>{experiences[selectedTab].period}</p>
            <ul className={styles.points}>
              {experiences[selectedTab].points.map((point, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
