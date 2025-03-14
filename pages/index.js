import React, { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "/styles/Home.module.css";
import Head from "next/head";
import * as THREE from 'three';

// Add ResumeButton component at the top level
const ResumeButton = () => {
  const handleDownload = () => {
    const resumeUrl = '/Resume.pdf';
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      className={styles.resumeButton}
      onClick={handleDownload}
      aria-label="Download Resume"
    >
      <div className={styles.resumeIconWrapper}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          className={styles.resumeIcon}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span className={styles.resumeLabel}>Resume</span>
      </div>
    </button>
  );
};

const projects = [
  {
    title: "Food Delivery Platform",
    description: "Engineered a scalable food delivery platform using Django and MySQL, featuring real-time order tracking, payment processing, and a comprehensive admin dashboard. Implemented a microservices architecture for order management, delivery routing, and restaurant integration, handling concurrent orders efficiently.",
    image: "/project-food-delivery.png",
    tech: ["Django", "Python", "MySQL", "Redis", "RESTful API"],
    github: "https://github.com/HarshaVippala/adbProject",
    demo: null
  },
  {
    title: "Car Rental Management System",
    description: "Designed and implemented a comprehensive database system and web application for a car rental company using Django and MySQL. Built a scalable backend with role-based access control, customer management, and real-time inventory tracking. Implemented RESTful APIs for CRUD operations and business intelligence reporting.",
    image: "/project-car-rental.png",
    tech: ["Django", "MySQL", "Python", "RESTful API", "Database Design"],
    github: "https://github.com/HarshaVippala/Database_Design",
    demo: null
  },
  {
    title: "Restaurant Booking AI Assistant",
    description: "Developed an intelligent conversational AI system using DeepPavlov framework and TensorFlow. Implemented natural language understanding, dialogue state tracking, and contextual response generation. The system handles complex restaurant booking scenarios with high accuracy in understanding user preferences.",
    image: "/project-restaurant-ai.png",
    tech: ["TensorFlow", "Python", "NLP", "DeepPavlov", "Conversational AI"],
    github: "https://github.com/HarshaVippala/Goal-Oriented-Dialogue-Systems-Using-DeepPavLov",
    demo: null
  }
];

// Remove the separate education array and combine with experiences
const timelineItems = [
  {
    type: 'experience',
    logo: '/7-eleven.png',
    company: '7-Eleven',
    role: 'Software Engineer II',
    startYear: '2024',
    period: 'February 2024 - Present',
    location: 'Irving, TX',
    summary: 'Leading development of serverless microservices for self-checkout mobile application, handling $500K+ monthly transactions across 60+ stores. Implementing IoT solutions and EBT payment systems.',
    description: 'Working on modernizing the digital experience for millions of customers through innovative web and mobile solutions.'
  },
  {
    type: 'experience',
    logo: '/Liberty-Mutual-Logo.jpg',
    company: 'Liberty Mutual Insurance',
    role: 'Senior Software Engineer',
    startYear: '2023',
    period: 'February 2023 - February 2024',
    location: 'Boston, MA',
    summary: 'Developed NestJS APIs for third-party insurance vendor integrations, enabling real-time quote generation and automated sales workflows. Built GraphQL and gRPC-based services.',
    description: 'Contributed to the development of enterprise-scale insurance platforms and digital transformation initiatives.'
  },
  {
    type: 'experience',
    logo: '/Liberty-Mutual-Logo.jpg',
    company: 'Liberty Mutual Insurance',
    role: 'Software Engineer',
    startYear: '2021',
    period: 'May 2021 - February 2023',
    location: 'Boston, MA',
    summary: 'Optimized backend quoting services handling 87,000+ monthly visits. Implemented user tracking features resulting in 7% conversion rate increase.',
    description: 'Developed and optimized backend quoting services for the insurance platform.'
  },
  {
    type: 'education',
    logo: '/NYU.png',
    institution: 'New York University',
    degree: "Master's in Computer Engineering",
    period: 'May 2021',
    startYear: '2019',
    location: 'New York, NY',
    summary: 'Specialized in Artificial Intelligence and Machine Learning',
    details: 'Specialized in Artificial Intelligence and Machine Learning'
  },
  {
    type: 'education',
    logo: '/klu.png',
    institution: 'KL University',
    degree: "Bachelor's in Computer Science",
    period: 'May 2019',
    startYear: '2015',
    location: 'Vijayawada, India',
    summary: 'Graduated with First Class Honors',
    details: 'Graduated with First Class Honors'
  }
];

const ContactSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.contactWrapper}
    >
      <div className={styles.contactIcons}>
        <motion.a
          href="mailto:harsha.vippala1@gmail.com"
          className={styles.contactIcon}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/gmail.svg" alt="Email" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/harsha-vippala"
          className={styles.contactIcon}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.svg" alt="LinkedIn" />
        </motion.a>
        <motion.a
          href="https://github.com/HarshaVippala"
          className={styles.contactIcon}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" alt="GitHub" />
        </motion.a>
      </div>

      <motion.a
        href="/Resume.pdf"
        download
        className={styles.resumeIconButton}
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="56" 
          height="56" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      </motion.a>
    </motion.div>
  );
};

const TechStackSection = () => (
  <motion.div 
    className={styles.skillsContainer}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className={styles.skillsGrid}>
      <motion.div 
        className={styles.skillCard}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <h3>Languages & Frameworks</h3>
        <div className={styles.skillTags}>
          <span>Node.js</span>
          <span>TypeScript</span>
          <span>NestJS</span>
          <span>Java</span>
          <span>SpringBoot</span>
          <span>Python</span>
        </div>
      </motion.div>

      <motion.div 
        className={styles.skillCard}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <h3>Cloud Services</h3>
        <div className={styles.skillTags}>
          <span>AWS Lambda</span>
          <span>EC2</span>
          <span>S3</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>IoT Core</span>
        </div>
      </motion.div>

      <motion.div 
        className={styles.skillCard}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <h3>Backend & Services</h3>
        <div className={styles.skillTags}>
          <span>RESTful APIs</span>
          <span>GraphQL</span>
          <span>gRPC</span>
          <span>Kafka</span>
          <span>Microservices</span>
          <span>Serverless</span>
        </div>
      </motion.div>

      <motion.div 
        className={styles.skillCard}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <h3>Databases</h3>
        <div className={styles.skillTags}>
          <span>MongoDB</span>
          <span>DynamoDB</span>
          <span>PostgreSQL</span>
          <span>AWS RDS</span>
          <span>Redshift</span>
        </div>
      </motion.div>

      <motion.div 
        className={styles.skillCard}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <h3>DevOps Tools</h3>
        <div className={styles.skillTags}>
          <span>New Relic</span>
          <span>Datadog</span>
          <span>CloudWatch</span>
          <span>Grafana</span>
          <span>Jenkins</span>
          <span>GitLab CI/CD</span>
          <span>Bitbucket</span>
        </div>
      </motion.div>

      <motion.div 
        className={styles.skillCard}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <h3>Testing Tools</h3>
        <div className={styles.skillTags}>
          <span>Jest</span>
          <span>JUnit</span>
          <span>Cypress.io</span>
          <span>Charles Proxy</span>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const frameRef = useRef(null);
  const [navStyle, setNavStyle] = useState('top');
  const [activeSection, setActiveSection] = useState('readme');
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateRendererSize = () => {
        if (!rendererRef.current) return;
        
        const totalHeight = Math.max(
          document.body.scrollHeight, 
          document.documentElement.scrollHeight,
          document.body.offsetHeight, 
          document.documentElement.offsetHeight,
          document.body.clientHeight, 
          document.documentElement.clientHeight
        );
        
        rendererRef.current.domElement.style.height = '100vh';
        rendererRef.current.domElement.style.width = '100vw';
        rendererRef.current.domElement.style.position = 'fixed';
        rendererRef.current.domElement.style.top = '0';
        rendererRef.current.domElement.style.left = '0';
        rendererRef.current.domElement.style.right = '0';
        rendererRef.current.domElement.style.bottom = '0';
        rendererRef.current.domElement.style.zIndex = '0';
        rendererRef.current.domElement.style.background = 'linear-gradient(to bottom, #0a192f, #112240)';
        rendererRef.current.domElement.style.pointerEvents = 'none';
      };

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
      renderer.domElement.style.width = '100vw';
      renderer.domElement.style.height = '100vh';
      renderer.domElement.style.zIndex = '0';
      renderer.domElement.style.background = 'linear-gradient(to bottom, #0a192f, #112240)';

      // Apply styles to cover full page
      updateRendererSize();

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

      // Optimized animation loop with frame rate limiting
      const clock = new THREE.Clock();
      let lastTime = 0;
      const fps = 30; // Limiting to 30 FPS instead of 60 for better performance
      const fpsInterval = 1000 / fps;

      function animate() {
        if (!sceneRef.current || !cameraRef.current || !rendererRef.current) {
          frameRef.current = requestAnimationFrame(animate);
          return;
        }

        const now = clock.getElapsedTime() * 1000;
        const elapsed = now - lastTime;

        // Only render if enough time has passed (frame limiting)
        if (elapsed > fpsInterval) {
          lastTime = now - (elapsed % fpsInterval);
          
          // Reduced rotation speeds for smoother animation
          sceneRef.current.rotation.x += 0.0001;
          sceneRef.current.rotation.y += 0.00005;
          
          // Render only when visible in viewport
          const rect = rendererRef.current.domElement.getBoundingClientRect();
          if (
            rect.bottom >= 0 &&
            rect.top <= window.innerHeight
          ) {
            rendererRef.current.render(sceneRef.current, cameraRef.current);
          }
        }
        
        frameRef.current = requestAnimationFrame(animate);
      }
      
      animate();

      // Improved scroll handler with debouncing
      let scrollTimeout;
      const handleScroll = () => {
        if (!scrollTimeout) {
          scrollTimeout = setTimeout(() => {
            const scrollY = window.scrollY;
            if (cameraRef.current) {
              // Reduced parallax effect for better performance
              cameraRef.current.position.y = -(scrollY * 0.1);
            }
            scrollTimeout = null;
          }, 10); // Small timeout for smoother scrolling
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Optimized resize handler with proper cleanup
      let resizeTimeout;
      function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (cameraRef.current && rendererRef.current) {
            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(window.innerWidth, window.innerHeight, false); // Added false for better performance
          }
        }, 100);
      }

      window.addEventListener('resize', handleResize);

      // Clean up event listeners and animation frame
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', updateRendererSize);
        window.removeEventListener('resize', updateRendererSize);
        
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
        
        if (rendererRef.current) {
          rendererRef.current.dispose();
        }
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const contactSection = document.getElementById('contact');
      const resumeButton = document.querySelector(`.${styles.resumeButton}`);
      
      // Hide resume button when contact section is in view
      if (contactSection && resumeButton) {
        const rect = contactSection.getBoundingClientRect();
        const isContactVisible = rect.top <= windowHeight * 0.7 && rect.bottom >= windowHeight * 0.3;
        
        if (isContactVisible) {
          resumeButton.style.opacity = '0';
          resumeButton.style.transform = 'translateY(20px)';
          setTimeout(() => {
            resumeButton.style.visibility = 'hidden';
          }, 300);
        } else {
          resumeButton.style.visibility = 'visible';
          resumeButton.style.opacity = '1';
          resumeButton.style.transform = 'translateY(0)';
        }
      }
      
      // Hide social links when contact section is in view
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isContactVisible = rect.top <= windowHeight * 0.7 && rect.bottom >= windowHeight * 0.3;
        const socialLinks = document.querySelector(`.${styles.socialLinks}`);
        
        if (socialLinks) {
          if (isContactVisible) {
            socialLinks.style.opacity = '0';
            socialLinks.style.transform = 'translateX(-20px)';
            setTimeout(() => {
              socialLinks.style.visibility = 'hidden';
            }, 300);
          } else {
            socialLinks.style.visibility = 'visible';
            socialLinks.style.opacity = '1';
            socialLinks.style.transform = 'translateX(0)';
          }
        }
      }
      
      // Existing nav style logic
      if (scrollPosition > 100 && navStyle === 'top') {
        setIsNavVisible(false);
        setTimeout(() => {
          setNavStyle('right');
          setIsNavVisible(true);
        }, 150);
      } else if (scrollPosition <= 100 && navStyle === 'right') {
        setIsNavVisible(false);
        setTimeout(() => {
          setNavStyle('top');
          setIsNavVisible(true);
        }, 150);
      }
      
      // Determine active section with improved detection for experience section
      const sections = ['readme', 'about', 'changelog', 'examples', 'stack', 'contact'];
      
      // Special handling for experience section which may need different detection criteria
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        const experienceRect = experienceSection.getBoundingClientRect();
        const experienceTop = experienceRect.top;
        const experienceBottom = experienceRect.bottom;
        
        // Make experience section active when it's within a larger portion of the viewport
        // This helps when the section has more complex content
        if (
          (experienceTop <= windowHeight * 0.4 && experienceBottom >= windowHeight * 0.1) ||
          (experienceTop >= 0 && experienceTop <= windowHeight * 0.3)
        ) {
          setActiveSection('experience');
          return; // Exit early if experience is active
        }
      }
      
      // Check other sections
      for (const section of sections) {
        if (section === 'experience') continue; // Skip as we handled it separately
        
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          
          // Consider a section active when it's in the middle third of the viewport
          const viewportMiddleStart = windowHeight * 0.3;
          const viewportMiddleEnd = windowHeight * 0.7;
          
          if (
            (elementTop <= viewportMiddleStart && elementBottom >= viewportMiddleStart) ||
            (elementTop <= viewportMiddleEnd && elementBottom >= viewportMiddleEnd) ||
            (elementTop >= viewportMiddleStart && elementBottom <= viewportMiddleEnd)
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check for active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navStyle]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the actual position of the element relative to the page
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Adjust offsets to minimize space above headers
      // Smaller offset values to position headers closer to the top
      const offset = -20; // Universal small offset to minimize space
      const absoluteElementTop = rect.top + scrollTop;
      const scrollToPosition = absoluteElementTop + offset;
      
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
      
      // Set active section after a short delay to allow for scroll completion
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 100);
    }
  };

  useEffect(() => {
    // First check on load if we need to scroll to a hash
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500); // Wait for page to fully load
    }
  }, []);

  const toggleExpand = (index) => {
    setExpandedItem(index === expandedItem ? null : index);
  };

  return (
    <div className={styles.container} ref={containerRef}>
        <Head>
          <title>Harsha Vippala | Senior Software Engineer</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
          <meta name="description" content="Harsha Vippala - Software Engineer specializing in web development, cloud technologies, and building exceptional digital experiences. Expertise in React, Node.js, AWS, and TypeScript." />
          
          {/* SEO Meta Tags */}
          <meta name="author" content="Harsha Vippala" />
          <meta name="keywords" content="Software Engineer, Full Stack Developer, React Developer, Node.js, TypeScript, AWS, Cloud Architecture, Web Development" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />

          {/* Open Graph / Social Media Meta Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Harsha Vippala | Software Engineer" />
          <meta property="og:description" content="Software Engineer specializing in web development and cloud technologies. Building exceptional digital experiences." />
          <meta property="og:url" content="https://harshavippala.com" />
          <meta property="og:site_name" content="Harsha Vippala Portfolio" />
          <meta property="og:image" content="/og-image.jpg" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Harsha Vippala | Software Engineer" />
          <meta name="twitter:description" content="Software Engineer specializing in web development and cloud technologies." />
          <meta name="twitter:image" content="/og-image.jpg" />

          {/* Security Headers */}
          <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
          <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
          <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" />

          {/* Favicon and Apple Touch Icons */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Harsha Vippala",
                "jobTitle": "Software Engineer",
                "url": "https://harshavippala.com",
                "sameAs": [
                  "https://github.com/harshavippala",
                  "https://linkedin.com/in/harshavippala"
                ],
                "worksFor": {
                  "@type": "Organization",
                  "name": "7-Eleven"
                },
                "alumniOf": [
                  {
                    "@type": "Organization",
                    "name": "Liberty Mutual Insurance"
                  },
                  {
                    "@type": "Organization",
                    "name": "American Express"
                  }
                ],
                "knowsAbout": [
                  "Web Development",
                  "Cloud Architecture",
                  "Software Engineering",
                  "Full Stack Development",
                  "React",
                  "Node.js",
                  "TypeScript",
                  "AWS"
                ]
              })
            }}
          />

          {/* Add link to privacy policy */}
          <link rel="privacy-policy" href="/privacy" />
        </Head>

      <ResumeButton />

      <main className={styles.main}>
        {isNavVisible && (
          <motion.nav 
            className={`${styles.sideNav} ${navStyle === 'top' ? styles.sideNavTop : styles.sideNavRight}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <button 
              onClick={() => scrollToSection('readme')}
              className={activeSection === 'readme' ? styles.active : ''}
            >
              <span className={styles.docPrefix}>./</span>README.md
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? styles.active : ''}
            >
              <span className={styles.docPrefix}>./</span>ABOUT.md
            </button>
            <button 
              onClick={() => scrollToSection('changelog')}
              className={activeSection === 'changelog' ? styles.active : ''}
            >
              <span className={styles.docPrefix}>./</span>CHANGELOG.md
            </button>
            <button 
              onClick={() => scrollToSection('examples')}
              className={activeSection === 'examples' ? styles.active : ''}
            >
              <span className={styles.docPrefix}>./</span>EXAMPLES/
            </button>
            <button 
              onClick={() => scrollToSection('stack')}
              className={activeSection === 'stack' ? styles.active : ''}
            >
              <span className={styles.docPrefix}>./</span>package.json
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? styles.active : ''}
            >
              <span className={styles.docPrefix}>./</span>CONTACT.md
            </button>
          </motion.nav>
        )}

        <motion.section 
          id="readme" 
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
              <span className={styles.greeting}>Hi, I'm</span>
              <span className={styles.name}>Harsha Vippala</span>
              <span className={styles.role}>Building scalable, cloud-native applications</span>
            </h1>
            <p className={styles.description}>
              I'm a software engineer specializing in building exceptional digital experiences. 
              Currently at 7-Eleven, working on self-checkout mobile applications and IoT integrations.
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

        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.docPrefix}>./</span>ABOUT.md
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.aboutContainer}
          >
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <p>
                  Software Engineer with 5 years of experience designing and deploying scalable, cloud-native applications. Currently based in <span className={styles.highlight}>Irving, TX</span>, with expertise in Node.js, TypeScript, NestJS, and AWS with a strong background in microservices architecture, API development, and distributed systems.
                </p>
                <p>
                  At 7-Eleven, I'm architecting and leading development of serverless microservices for self-checkout mobile applications, handling $500K+ in transactions per month across 60+ stores. My work includes implementing IoT integrations and EBT payment systems.
                </p>
                <p>
                  Beyond coding, I'm passionate about system design, performance optimization, and mentoring fellow engineers. When I'm not coding, you'll find me watching Formula 1 races, following football matches, or unwinding with some PlayStation gaming. I also enjoy attending concerts and experiencing live music.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="changelog" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.docPrefix}>./</span>CHANGELOG.md
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.timelineContainer}
          >
            <div className={styles.timelineWrapper}>
              <div className={styles.timelineLine}>
                {timelineItems.map((item, index) => (
                  <div 
                    key={`year-${index}`} 
                    className={`${styles.timelineYear} ${expandedItem === index ? styles.expanded : ''}`}
                  >
                    {item.startYear}
                    <div className={styles.timelineDot}></div>
                  </div>
                ))}
              </div>
              <div className={styles.timelineCards}>
                {timelineItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    className={`${styles.timelineItem} ${expandedItem === index ? styles.expanded : ''}`}
                    layout
                    transition={{ duration: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <div 
                      className={styles.timelineHeader}
                      onClick={() => toggleExpand(index)}
                    >
                      <div className={styles.timelineCardLogo}>
                        <img src={item.logo} alt={item.type === 'experience' ? `${item.company} logo` : `${item.institution} logo`} />
                      </div>
                      <div className={styles.timelineSummary}>
                        <div className={styles.timelineCompany}>
                          {item.type === 'experience' ? item.company : item.institution}
                        </div>
                        <div className={styles.timelineRole}>
                          {item.type === 'experience' ? item.role : item.degree}
                        </div>
                      </div>
                    </div>
                    {expandedItem === index && (
                      <motion.div 
                        className={styles.timelineExpandedInfo}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={styles.timelinePeriod}>{item.period}</div>
                        <div className={styles.timelineLocation}>{item.location}</div>
                        <p className={styles.timelineSummaryText}>{item.summary}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="examples" className={styles.projects}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.docPrefix}>./</span>EXAMPLES/
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.projectsGrid}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={`${project.title}-tech-${techIndex}`} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                    <img src="/github.svg" alt="GitHub" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="stack" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.docPrefix}>./</span>package.json
          </h2>
          <TechStackSection />
        </section>

        <section id="contact" className={`${styles.section} ${styles.lastSection}`}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.docPrefix}>./</span>CONTACT.md
          </h2>
          <ContactSection />
          <footer className={styles.footer}>
            <p>Built by me with Next.js ✨</p>
          </footer>
        </section>
      </main>

      <Analytics />
    </div>
  );
}