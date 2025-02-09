import React, { useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styles from "/styles/Home.module.css";
import Head from "next/head";
import * as THREE from 'three';

const skills = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  frameworks: ['React', 'Node.js', 'Spring Boot', 'Next.js', 'Express.js'],
  cloud: ['AWS Lambda', 'S3', 'EC2', 'RDS', 'CloudWatch'],
  tools: ['Docker', 'Git', 'Jenkins', 'Jira', 'Terraform']
};

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Liberty Mutual Insurance',
    period: 'February 2023 - Present',
    location: 'Boston, MA',
    logo: '/liberty-mutual.svg',
    points: [
      'Working on web applications for insurance services',
      'Using AWS services for cloud infrastructure',
      'Participating in code reviews and team discussions',
      'Learning about cloud technologies and sharing with team'
    ],
    tech: ['NestJS', 'AWS', 'TypeScript', 'GraphQL']
  },
  {
    title: 'Software Engineer',
    company: 'Liberty Mutual Insurance',
    period: 'September 2021 - February 2023',
    location: 'Boston, MA',
    logo: '/liberty-mutual.svg',
    points: [
      'Developed web applications for insurance services',
      'Created tests for code reliability',
      'Worked on application performance',
      'Collaborated with design team'
    ],
    tech: ['React', 'Node.js', 'Jest', 'AWS']
  },
  {
    title: 'Software Engineer',
    company: 'American Express',
    period: 'February 2017 - May 2019',
    location: 'Hyderabad, India',
    logo: '/amex.svg',
    points: [
      'Built features for payment processing systems',
      'Added monitoring and error handling',
      'Worked on database optimizations',
      'Learned about microservices'
    ],
    tech: ['Spring Boot', 'MySQL', 'Redis', 'RabbitMQ']
  }
];

const projects = [
  {
    title: 'Insurance Portal',
    description: 'A web portal for managing insurance policies. Includes document handling and basic analytics.',
    tech: ['Spring Boot', 'React', 'AWS', 'GraphQL'],
    image: '/insurance.jpg',
    github: '',
    live: ''
  },
  {
    title: 'Transaction Monitor',
    description: 'A monitoring tool for payment transactions. Shows transaction status and basic analytics.',
    tech: ['Python', 'AWS Redshift', 'Node.js', 'D3.js'],
    image: '/analytics.jpg',
    github: '',
    live: ''
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      sceneRef.current = scene;
      
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
      cameraRef.current = camera;
      
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: false
      });
      
      rendererRef.current = renderer;
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x0a192f, 1);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      document.body.appendChild(renderer.domElement);
      renderer.domElement.style.position = 'fixed';
      renderer.domElement.style.top = '0';
      renderer.domElement.style.left = '0';
      renderer.domElement.style.zIndex = '0';
      renderer.domElement.style.background = 'linear-gradient(to bottom, #0a192f, #112240)';

      // Create multiple star layers with different sizes and colors
      const createStarLayer = (count, size, colorRange) => {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const colors = [];
        
        for (let i = 0; i < count; i++) {
          const x = THREE.MathUtils.randFloatSpread(2000);
          const y = THREE.MathUtils.randFloatSpread(2000);
          const z = THREE.MathUtils.randFloatSpread(1500);
          
          vertices.push(x, y, z);

          const color = new THREE.Color();
          const hue = colorRange.h + Math.random() * colorRange.hRange;
          const saturation = colorRange.s + Math.random() * colorRange.sRange;
          const lightness = colorRange.l + Math.random() * colorRange.lRange;
          color.setHSL(hue, saturation, lightness);
          
          colors.push(color.r, color.g, color.b);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
          size: size,
          vertexColors: true,
          transparent: true,
          opacity: 1,
          sizeAttenuation: true
        });

        return new THREE.Points(geometry, material);
      };

      // Create distant tiny stars
      const distantStars = createStarLayer(20000, 1, {
        h: 0.6, hRange: 0.2,
        s: 0.2, sRange: 0.4,
        l: 0.8, lRange: 0.2
      });
      scene.add(distantStars);

      // Create medium-sized stars
      const mediumStars = createStarLayer(5000, 2, {
        h: 0.6, hRange: 0.3,
        s: 0.5, sRange: 0.5,
        l: 0.9, lRange: 0.1
      });
      scene.add(mediumStars);

      // Create bright prominent stars
      const brightStars = createStarLayer(1000, 3, {
        h: 0.1, hRange: 0.1,
        s: 0.2, sRange: 0.2,
        l: 1.0, lRange: 0
      });
      scene.add(brightStars);

      // Create space dust particles
      const dustGeometry = new THREE.BufferGeometry();
      const dustVertices = [];
      const dustColors = [];
      
      for (let i = 0; i < 10000; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const r = 1000 + Math.random() * 1000;

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        
        dustVertices.push(x, y, z);

        const color = new THREE.Color();
        color.setHSL(0.6 + Math.random() * 0.2, 0.2, 0.5);
        dustColors.push(color.r, color.g, color.b);
      }

      dustGeometry.setAttribute('position', new THREE.Float32BufferAttribute(dustVertices, 3));
      dustGeometry.setAttribute('color', new THREE.Float32BufferAttribute(dustColors, 3));

      const dustMaterial = new THREE.PointsMaterial({
        size: 1,
        vertexColors: true,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending
      });

      const spaceDust = new THREE.Points(dustGeometry, dustMaterial);
      scene.add(spaceDust);

      // Create nebula clouds with better coloring
      const createNebula = (color1, color2, particleCount) => {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const colors = [];
        
        for (let i = 0; i < particleCount; i++) {
          const theta = THREE.MathUtils.randFloatSpread(360);
          const phi = THREE.MathUtils.randFloatSpread(360);
          const r = 200 + Math.random() * 300;

          const x = r * Math.sin(theta) * Math.cos(phi);
          const y = r * Math.sin(theta) * Math.sin(phi);
          const z = r * Math.cos(theta);
          
          vertices.push(x, y, z);

          const mixFactor = Math.random();
          const color = new THREE.Color(color1).lerp(new THREE.Color(color2), mixFactor);
          colors.push(color.r, color.g, color.b);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
          size: 4,
          vertexColors: true,
          transparent: true,
          opacity: 0.3,
          blending: THREE.AdditiveBlending
        });

        return new THREE.Points(geometry, material);
      };

      // Create different colored nebulae
      const nebulae = [
        createNebula('#ff3366', '#9933ff', 3000), // Pink to Purple
        createNebula('#3366ff', '#33ffcc', 3000), // Blue to Cyan
        createNebula('#ffcc33', '#ff3366', 3000)  // Gold to Pink
      ];

      nebulae.forEach(nebula => {
        nebula.position.set(
          THREE.MathUtils.randFloatSpread(1000),
          THREE.MathUtils.randFloatSpread(1000),
          THREE.MathUtils.randFloatSpread(500)
        );
        scene.add(nebula);
      });

      camera.position.z = 1000;

      // Throttled scroll handler
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            camera.position.y = -(scrollY * 0.2); // Reduced scroll effect multiplier
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Optimized animation loop
      const clock = new THREE.Clock();
      let lastTime = 0;
      const interval = 1000 / 60; // 60 FPS target

      function animate() {
        frameRef.current = requestAnimationFrame(animate);
        
        const currentTime = clock.getElapsedTime() * 1000;
        const deltaTime = currentTime - lastTime;

        if (deltaTime > interval) {
          // Rotate star layers at different speeds
          distantStars.rotation.y += 0.0001;
          mediumStars.rotation.y += 0.00015;
          brightStars.rotation.y += 0.0002;
          spaceDust.rotation.y += 0.00005;

          // Animate nebulae
          nebulae.forEach((nebula, i) => {
            nebula.rotation.x += 0.0001 * (i + 1);
            nebula.rotation.y += 0.00015 * (i + 1);
            
            const pulse = Math.sin(currentTime * 0.0003 + i) * 0.15 + 0.85;
            nebula.material.opacity = 0.3 * pulse;
          });

          renderer.render(scene, camera);
          lastTime = currentTime - (deltaTime % interval);
        }
      }
      
      animate();

      // Optimized resize handler
      let resizeTimeout;
      function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }, 100);
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(frameRef.current);
        scene.clear();
        renderer.dispose();
        document.body.removeChild(renderer.domElement);
      };
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container} ref={containerRef}>
        <Head>
        <title>Harsha Vippala | Software Engineer</title>
        <meta name="description" content="Software engineer specializing in web development and cloud technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        </Head>

      <main className={styles.main}>
        <motion.nav 
          className={styles.sideNav}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
        </motion.nav>

        <motion.section 
          id="about" 
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div id="hero-background" className={styles.heroBackground}></div>
          <motion.div 
            className={styles.heroContent}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={styles.title}>
              <span className={styles.greeting}>Hi, my name is</span>
              <span className={styles.name}>Harsha Vippala</span>
              <span className={styles.role}>I build things for the web</span>
            </h1>
            <p className={styles.description}>
              I'm a software engineer specializing in building exceptional digital experiences. 
              Currently working at Liberty Mutual Insurance, focused on web development and cloud technologies.
            </p>
          </motion.div>
        </motion.section>

        <motion.div 
          className={styles.socialLinks}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { href: "https://github.com/harshavippala", icon: "/github.svg", alt: "GitHub" },
            { href: "https://linkedin.com/in/harshavippala", icon: "/linkedin.svg", alt: "LinkedIn" },
            { href: "mailto:harsha.vippala@gmail.com", icon: "/gmail.svg", alt: "Email" }
          ].map((social, index) => (
            <motion.a
              key={social.alt}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={social.icon} alt={social.alt} />
            </motion.a>
          ))}
        </motion.div>

        <section id="experience" className={styles.experience}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>01.</span>Experience
          </h2>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={exp.company + exp.period} className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <div className={styles.companyHeader}>
                    <div className={styles.companyLogo}>
                      <img src={exp.logo} alt={exp.company} />
                    </div>
                    <div className={styles.companyInfo}>
                      <h3>{exp.title} @ {exp.company}</h3>
                      <p className={styles.period}>{exp.period}</p>
                    </div>
                  </div>
                  <ul className={styles.points}>
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className={styles.techStack}>
                    {exp.tech.map((tech, i) => (
                      <span key={i} className={styles.tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className={styles.projects}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>02.</span>Projects
          </h2>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={project.title} className={styles.projectCard}>
                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <motion.footer 
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <p>Built by me with <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">Cursor</a> 🚀</p>
      </motion.footer>
      
      <Analytics />
    </div>
  );
}
