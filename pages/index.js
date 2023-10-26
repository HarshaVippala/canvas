import React, { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import styles from '/styles/Home.module.css';
import Head from 'next/head';

export default function LandingPage() {
  const [typedText, setTypedText] = useState('');
  const [subTypedText, setSubTypedText] = useState('');
  const [completedFirstText, setCompletedFirstText] = useState(false);

  const targetText = "Haarsha Vippala";
  const subTargetText = " Software Engineer | Tech Enthusiast ";

  const aboutMeRef = useRef(null);
  const experiencesRef = useRef(null);
  const otherRef = useRef(null);

  useEffect(() => {
    let index = 0;
    let subIndex = 0;

    const typingInterval = setInterval(() => {
      if (!completedFirstText) {
        if (index < targetText.length) {
          setTypedText((prevText) => prevText + targetText.charAt(index));
          index++;
        } else {
          setCompletedFirstText(true);
        }
      } else {
        if (subIndex < subTargetText.length) {
          setSubTypedText((prevSubText) => prevSubText + subTargetText.charAt(subIndex));
          subIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }
    }, 40); 

    return () => clearInterval(typingInterval); 
  }, [completedFirstText]);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Harsha Vippala | Software Engineer </title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <div className={styles.fixedContainer}>
        <div className={styles.socialIcons}>
            <a href="https://github.com/HarshaVippala" target="_blank" rel="noopener noreferrer">
                {/* Replace with your Facebook icon */}
                <img src="/github.svg" alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/harsha-vippala-8bb809216/" target="_blank" rel="noopener noreferrer">
                {/* Replace with your LinkedIn icon */}
                <img src="/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/_harshavardhan_/" target="_blank" rel="noopener noreferrer">
                {/* Replace with your LinkedIn icon */}
                <img src="/instagram.svg" alt="LinkedIn" />
            </a>
            <a href="mailto:harsha.vippala1@gmail.com" target="_blank" rel="noopener noreferrer">
                {/* Replace with your LinkedIn icon */}
                <img src="/gmail.svg" alt="LinkedIn" />
            </a>
        </div>
        <div className={styles.verticalLineLeft}></div>
      </div>
      <div className={styles.textContainer}>
        <h1 id="typed-output" className={styles.h1}>{typedText}</h1>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.h2}>{subTypedText}</h2>
      </div>
      <div>
        <div className={styles.buttonsContainer}>
          <a className={styles.sectionLink} onClick={() => scrollToSection(aboutMeRef)}>About Me</a>
          <a className={styles.sectionLink} onClick={() => scrollToSection(experiencesRef)}>Experiences</a>
          <a className={styles.sectionLink} onClick={() => scrollToSection(otherRef)}>Other</a>
        </div>
      </div>
      <div ref={aboutMeRef} className={styles.section}>
        everything below is being worked on , please check back later
      </div>
      <div ref={experiencesRef} className={styles.section}>
        Experiences content...
      </div>
      <div ref={otherRef} className={styles.section}>
        Other content...
      </div>  
      <Analytics />
    </div>
  );
}
