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
    logo: '/7-eleven-logo.png',
    projectLink: 'https://smart.link/0cqpga62gqmqk?site_id=2020-09-07&creative_id=7R-paid-lp&cp_1=home',
    projectTooltip: 'View 7-Eleven Mobile App Platform',
    points: [
      'Spearheaded backend development for 7-Eleven\'s self-checkout mobile application by architecting and managing serverless microservices using AWS Lambda, MongoDB, and AWS services; processing ~$0.5M in orders across 60 active stores',
      'Led the complete modernization of legacy systems by upgrading Node.js and Mongoose versions and refactoring critical services, resulting in significant latency reduction',
      'Engineered IoT integrations at in-store confirmation stations implementing QR code validation system and synchronized audio feedback',
      'Designed and implemented an end-to-end EBT payment processing solution, including onboarding a new payment processor',
      'Optimized backend performance through strategic refactoring and enhancements to MongoDB queries',
      'Independently managed the entire backend lifecycle, ensuring 24/7 system availability and real-time integration'
    ],
    tech: ['Node.js', 'TypeScript', 'AWS Lambda', 'MongoDB', 'Serverless', 'IoT', 'Microservices']
  },
  {
    title: 'Senior Software Engineer',
    previousRole: {
      title: 'Software Engineer',
      period: 'September 2021 - February 2023',
      points: [
        'Worked in the quoting domain, responsible for providing quotes for different insurance products, handling an average of 87,000 monthly visits',
        'Implemented a user data tracking feature, capturing interactions of users in the quote flow, empowering the business team to identify customer behavior',
        'Increased conversion rates by 7% through data-driven decisions about product development and targeted marketing campaigns',
        'Maintained a dynamic client UI through regular updates of mock designs and components, ensuring robust end-to-end testing'
      ]
    },
    company: 'Liberty Mutual Insurance',
    period: 'February 2023 - February 2024',
    location: 'Irving, TX',
    logo: '/liberty-mutual-logo.png',
    projectLink: 'https://www.getcertainly.com/',
    projectTooltip: 'View Certainly Insurance Platform',
    points: [
      'Engineered and optimized Node.js-based RESTful APIs enabling seamless integration with key insurance vendors such as Zebra and Insurify',
      'Designed and implemented a reporting API using AWS Redshift data warehouse for on-demand sales reports, streamlining manual workflows',
      'Utilized GraphQL and gRPC to architect robust APIs, ensuring efficient third-party system integration',
      'Managed and monitored production systems to ensure availability and performance, proactively resolving issues',
      'Led a team of interns in implementing a product availability manager service using AWS Lambda',
      'Supervised the entire redesign of the user account page on the website'
    ],
    tech: ['Node.js', 'React', 'TypeScript', 'GraphQL', 'gRPC', 'AWS', 'Redshift', 'Lambda']
  },
  {
    title: 'Software Engineer',
    company: 'American Express',
    period: 'April 2018 - May 2019',
    location: 'Hyderabad, India',
    logo: '/american-express-logo.png',
    projectLink: 'https://www.americanexpress.com/en-us/benefits/rewards/membership-rewards/?inav=us_menu_rewards_benefits_rewards_membership_rewards',
    projectTooltip: 'View Amex Membership Rewards Platform',
    points: [
      'Collaborated on Amex\'s representative-facing interface, leveraging the custom Amex React library',
      'Integrated frontend seamlessly with backend using Spring, resulting in a simplified user experience for representatives',
      'Implemented state management with Redux, optimizing data handling and ensuring efficient performance',
      'Orchestrated real-time data synchronization through WebSockets, enhancing customer service responsiveness',
      'Designed and implemented RESTful APIs using Spring MVC and Spring Boot',
      'Implemented unit testing using JUnit and integration testing using Spring Boot Test',
      'Used Spring Data JPA to access and manage data in a MySQL database'
    ],
    tech: ['Spring Boot', 'React', 'Redux', 'WebSockets', 'MySQL', 'Java', 'JUnit', 'JPA']
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
          <div key={exp.company + exp.period} 
               className={styles.timelineContent}
               data-company={exp.company.replace(/\s+/g, '-')}>
            <h3 className={styles.roleTitle}>{exp.title}</h3>
            <div className={styles.companyName}>
              @ {exp.company}
              {exp.projectLink && (
                <a 
                  href={exp.projectLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.projectLink}
                  title={exp.projectTooltip}
                >
                  <span className={styles.linkText}>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}
            </div>
            <div className={styles.companyLogo} data-logo-text={exp.company}>
              {exp.company === '7-Eleven' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="100%" height="100%">
                  <rect width="80" height="80" x="10" y="10" rx="10" fill="#FF7A21" />
                  <rect width="80" height="80" x="110" y="10" rx="10" fill="#ED1B2D" />
                  <text x="50" y="65" fontFamily="Arial, sans-serif" fontSize="50" fontWeight="bold" fill="white" textAnchor="middle">7</text>
                  <text x="150" y="65" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="white" textAnchor="middle">11</text>
                </svg>
              )}
              {exp.company === 'Liberty Mutual Insurance' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="100%" height="100%">
                  <rect width="180" height="80" x="10" y="10" rx="10" fill="#1D3C78" />
                  <text x="100" y="60" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">LIBERTY</text>
                </svg>
              )}
              {exp.company === 'American Express' && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="100%" height="100%">
                  <rect width="180" height="80" x="10" y="10" rx="10" fill="#0066A6" />
                  <text x="100" y="55" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">AMERICAN</text>
                  <text x="100" y="80" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">EXPRESS</text>
                </svg>
              )}
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
