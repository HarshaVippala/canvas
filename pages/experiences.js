import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const experiences = [
  {
    title: 'Software Engineer II',
    company: '7-Eleven',
    period: 'March 2024 - Present',
    location: 'Irving, TX',
    logo: '/7-eleven-simple.svg',
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
    logo: '/liberty-mutual-simple.svg',
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
    logo: '/american-express-simple.svg',
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
    <div className={styles.container}>
      <Head>
        <title>Experience | Harsha Vippala</title>
        <meta name="description" content="Harsha Vippala's professional experience" />
      </Head>

      <main className={styles.main}>
        <div className={styles.experience}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>02.</span>Experience
          </h2>
          
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                className={styles.timelineContent}
                data-company={exp.company.replace(/\s+/g, '-')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={styles.companyHeader}>
                  <div className={styles.roleInfo}>
                    <h3 className={styles.roleTitle}>
                      {exp.title}
                      <span className={styles.company}> @ {exp.company}</span>
                    </h3>
                    <div className={styles.period}>{exp.period}</div>
                    <div className={styles.location}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {exp.location}
                    </div>
                  </div>
                  <div className={styles.companyLogo}>
                    <img src={exp.logo} alt={`${exp.company} logo`} />
                  </div>
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
                      <span className={styles.arrow}>→</span>
                      <span className={styles.previousRolePeriod}>{exp.previousRole.period}</span>
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
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
