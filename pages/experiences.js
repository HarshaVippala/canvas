import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import styles from '../styles/Experience.module.css';

const experiences = [
  {
    title: 'Software Engineer II',
    company: '7-Eleven',
    period: 'March 2024 - Present',
    location: 'Irving, TX',
    logo: '/7-eleven-logo-1.svg',
    points: [
      'Leading development of next-generation retail technology solutions',
      'Architecting and implementing microservices using Node.js and TypeScript',
      'Building scalable APIs to support mobile and web applications',
      'Collaborating with product teams to enhance digital customer experience',
      'Implementing CI/CD pipelines and automated testing strategies'
    ],
    tech: ['Node.js', 'TypeScript', 'AWS', 'React', 'MongoDB', 'Docker']
  },
  {
    title: 'Senior Software Engineer',
    previousRole: {
      title: 'Software Engineer',
      period: 'September 2021 - February 2023',
      points: [
        'Developed and maintained core insurance platform features',
        'Implemented RESTful APIs using NestJS and GraphQL',
        'Collaborated with UX team to improve user interface design',
        'Participated in code reviews and technical documentation'
      ]
    },
    company: 'Liberty Mutual Insurance',
    period: 'February 2023 - February 2024',
    location: 'Boston, MA',
    logo: '/liberty-mutual.svg',
    points: [
      'Promoted to Senior Software Engineer for exceptional performance and technical leadership',
      'Led development of high-performance web applications using NestJS and GraphQL, improving system response time by 40%',
      'Architected and implemented cloud infrastructure using AWS services, resulting in 99.9% uptime',
      'Mentored junior developers and conducted technical interviews for the team',
      'Spearheaded the adoption of TypeScript and GraphQL, leading to 30% reduction in runtime errors'
    ],
    tech: ['NestJS', 'React', 'TypeScript', 'GraphQL', 'AWS', 'Node.js', 'Jest']
  },
  {
    title: 'Software Engineer',
    company: 'American Express',
    period: 'February 2017 - May 2019',
    location: 'Hyderabad, India',
    logo: '/american-express-1.svg',
    points: [
      'Developed and maintained payment processing systems serving millions of transactions',
      'Implemented real-time transaction monitoring and fraud detection features',
      'Optimized database queries resulting in 50% improvement in response times',
      'Built microservices architecture using Spring Boot and Redis',
      'Collaborated with global teams across multiple time zones'
    ],
    tech: ['Spring Boot', 'MySQL', 'Redis', 'RabbitMQ', 'Java', 'Angular']
  }
];

export default function Experience() {
  return (
    <div className={styles.experienceSection}>
      <Head>
        <title>Experience | Harsha Vippala</title>
        <meta name="description" content="Harsha Vippala's professional experience" />
      </Head>

      <h2 className={styles.sectionTitle}>Experience</h2>
      
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={exp.company + exp.period} className={styles.timelineContent}>
            <h3 className={styles.roleTitle}>{exp.title}</h3>
            <div className={styles.companyName}>
              @ {exp.company}
              <div className={styles.companyLogo}>
                <img src={exp.logo} alt={exp.company} />
              </div>
            </div>
            <div className={styles.period}>{exp.period}</div>
            <div className={styles.location}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {exp.location}
            </div>

            <ul className={styles.points}>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {exp.previousRole && (
              <div className={styles.previousRole}>
                <div className={styles.roleTransition}>
                  <span className={styles.previousRoleTitle}>{exp.previousRole.title}</span>
                  <div className={styles.previousRolePeriod}>{exp.previousRole.period}</div>
                </div>
                <ul className={styles.points}>
                  {exp.previousRole.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.techStack}>
              {exp.tech.map((tech, i) => (
                <span key={i} className={styles.tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
