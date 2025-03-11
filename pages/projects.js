import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import projectStyles from '../styles/projects.module.css';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with Next.js and Framer Motion. Features smooth animations and interactive elements.',
    tech: ['Next.js', 'React', 'Framer Motion', 'CSS Modules'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://harshavippala.com',
    image: '/portfolio-preview.jpg'
  },
  // Add more projects here
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects | Harsha Vippala</title>
        <meta name="description" content="Featured projects by Harsha Vippala" />
      </Head>

      <main className={styles.main}>
        <div className={styles.projects}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>03.</span>Projects
          </h2>
          
          <motion.div 
            className={projectStyles.projectsGrid}
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                className={projectStyles.projectCard}
                variants={item}
                whileHover={{ y: -10 }}
              >
                <div className={projectStyles.projectImage}>
                  <img src={project.image} alt={project.title} />
                  <div className={projectStyles.projectLinks}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <img src="/github.svg" alt="GitHub" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <img src="/external-link.svg" alt="Live Site" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className={projectStyles.projectInfo}>
                  <h3 className={projectStyles.projectTitle}>{project.title}</h3>
                  <p className={projectStyles.projectDescription}>{project.description}</p>
                  <ul className={projectStyles.techList}>
                    {project.tech.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
