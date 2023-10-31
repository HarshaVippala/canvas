import React, { useState, useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import styles from "/styles/Home.module.css";
import Head from "next/head";

export default function LandingPage() {
  const [typedText, setTypedText] = useState("");
  const [subTypedText, setSubTypedText] = useState("");
  const [completedFirstText, setCompletedFirstText] = useState(false);
  const [experienceIndex, setExperienceIndex] = useState(0);

  const targetText = "Haarsha Vippala";
  const subTargetText = " Software Engineer";

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
          setSubTypedText(
            (prevSubText) => prevSubText + subTargetText.charAt(subIndex)
          );
          subIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [completedFirstText]);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    if (experienceIndex > 0) {
      setExperienceIndex(experienceIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (experienceIndex < experiences.length - 1) {
      setExperienceIndex(experienceIndex + 1);
    }
  };

  const experiences = [
    {
      company: "Company 1",
      dates: "Date1 - Date2",
      website: "https://company1-website.com",
      description: "Short description.",
    },
    {
      company: "Company 2",
      dates: "Date3 - Date4",
      website: "https://company2-website.com",
      description: "Short description",
    },
    // Add more experiences here
  ];

  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Harsha Vippala | Software Engineer </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.fixedContainer}>
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/HarshaVippala"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Replace with your Facebook icon */}
            <img src="/github.svg" alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/harsha-vippala-8bb809216/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Replace with your LinkedIn icon */}
            <img src="/linkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/_harshavardhan_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Replace with your LinkedIn icon */}
            <img src="/instagram.svg" alt="LinkedIn" />
          </a>
          <a
            href="mailto:harsha.vippala1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Replace with your LinkedIn icon */}
            <img src="/gmail.svg" alt="LinkedIn" />
          </a>
        </div>
        <div className={styles.verticalLineLeft}></div>
      </div>
      <div className={styles.textContainer}>
        <h1 id="typed-output" className={styles.h1}>
          {typedText}
        </h1>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.h2}>{subTypedText}</h2>
      </div>
      <div>
        <div className={styles.buttonsContainer}>
          <a
            className={styles.sectionLink}
            onClick={() => scrollToSection(aboutMeRef)}
          >
            About Me
          </a>
          <a
            className={styles.sectionLink}
            onClick={() => scrollToSection(experiencesRef)}
          >
            Experiences
          </a>
          <a
            className={styles.sectionLink}
            onClick={() => scrollToSection(otherRef)}
          >
            Other
          </a>
        </div>
      </div>
      <div
        ref={aboutMeRef}
        className={`${styles.section} ${styles.aboutSection}`}
      >
        A little about me
        <div className={styles.aboutSectionText}>
          Greetings! I'm Harsha Vippala, a seasoned software engineer residing
          in Dallas, Texas. With over five years of professional experience in
          the software development field, I've had the privilege of working on a
          wide range of projects, crafting code for various back-end
          applications. My professional journey has been a dynamic one, marked
          by a deep appreciation for software development and a knack for
          problem-solving.
        </div>
        <div className={styles.aboutSectionText}>
          In the professional sphere, I've specialized in creating APIs, which
          act as the backbone of many web applications. Whether it's enabling
          seamless data exchange through RESTful, the flexibility of GraphQL, or
          the power of gRPC, I've enjoyed the nuances of API development.
        </div>
        <div className={styles.aboutSectionText}>
          On a more personal note, when I'm not immersed in the tech world, I'm
          a fervent explorer of culinary delights. I'm an unabashed foodie,
          always on the hunt for new and exciting cuisines to savor. Gaming is
          another passion of mine. You'll often find me engaged in thrilling
          virtual battles on my PlayStation, a perfect way to unwind and have
          fun. Sports fanatics, take note! I'm an avid follower of F1, football,
          and cricket. The excitement of races, matches, and tournaments never
          fails to captivate me.
        </div>
        <div className={styles.aboutSectionText}>
          I invite you to explore both my professional and personal sides. My
          website serves as a window to my multifaceted world, and I'm always
          open to new connections and opportunities.
        </div>
      </div>
      <div ref={experiencesRef} className={styles.section}>
        <div className="experience-container">
          <button
            className={styles.scrollButton}
            onClick={handleScrollLeft}
            disabled={experienceIndex === 0}
          >
            {"<"}
          </button>
          <div className={styles.experience}>
            <h3>{experiences[experienceIndex].company}</h3>
            <p>Dates of Employment: {experiences[experienceIndex].dates}</p>
            <a href={experiences[experienceIndex].website} target="_blank">
              Visit Website
            </a>
            <p>{experiences[experienceIndex].description}</p>
          </div>
          <button
            className={styles.scrollButton}
            onClick={handleScrollRight}
            disabled={experienceIndex === experiences.length - 1}
          >
            {">"}
          </button>
        </div>
      </div>
      <div ref={otherRef} className={styles.section}>
        Other content...
      </div>
      <Analytics />
      <footer className={styles.footer}>
        <p> This is the latest iteration of the website</p>
        <p>&copy; 2023 Your's truly. All rights reserved.</p>
      </footer>
    </div>
  );
}
