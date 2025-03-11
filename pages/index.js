import React, { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "/styles/Home.module.css";
import Head from "next/head";
import * as THREE from 'three';

const skills = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Groovy', 'Go', 'SQL'],
  frameworks: ['React', 'Node.js', 'NestJS', 'Spring Boot', 'Next.js', 'Express.js', 'GraphQL', 'gRPC', 'Kafka', 'RabbitMQ'],
  cloud: ['AWS Lambda', 'S3', 'EC2', 'RDS', 'CloudWatch', 'Redshift', 'DynamoDB', 'ECS', 'ELB', 'EKS', 'IAM', 'GCP'],
  tools: ['Docker', 'Git', 'Jenkins', 'Jira', 'Terraform', 'Kubernetes', 'Cypress.io', 'Jest', 'JUnit', 'Datadog', 'Splunk', 'Grafana', 'Kibana', 'Ansible', 'Bamboo']
};

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

const projects = [
  {
    title: "Food Delivery App",
    description: "Developed a comprehensive food delivery platform using Django and MySQL. The system features customer management, order processing, payment handling, and delivery tracking. Implemented a relational database with multiple entity relationships to manage restaurants, menu items, customer orders, and delivery personnel.",
    image: "/project-food-delivery.png",
    tech: ["Django", "Python", "MySQL", "Database Design", "RESTful API"],
    github: "https://github.com/HarshaVippala/adbProject",
    demo: null
  },
  {
    title: "Neural Network Security",
    description: "Developed a neural network security tool to detect and mitigate backdoor attacks in deep learning models. Implemented the Neural Cleanse approach to reverse-engineer potential triggers and patch affected networks without compromising performance on clean inputs.",
    image: "/project-backdoor.png",
    tech: ["Python", "TensorFlow", "Deep Learning", "Security", "Computer Vision"],
    github: "https://github.com/HarshaVippala/BACKDOOR-DETECTOR-FOR-BADNETS-USING-NEURAL-CLEANSE",
    demo: null
  },
  {
    title: "Noise Cancellation",
    description: "Implemented a noise reduction system using Least Mean Square (LMS) adaptive filtering techniques to filter out additive noise from audio signals. Combined speech samples with real noise at specific signal-to-noise ratios and developed MATLAB algorithms to effectively remove noise patterns.",
    image: "/project-anc.png",
    tech: ["MATLAB", "Signal Processing", "Adaptive Filtering", "DSP"],
    github: "https://github.com/HarshaVippala/Adaptive-Noise-Cancellation-using-LMS",
    demo: null
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const frameRef = useRef(null);
  const [navStyle, setNavStyle] = useState('top');
  const [activeSection, setActiveSection] = useState('about');
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [expandedExperiences, setExpandedExperiences] = useState({});

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
      
          // Change nav style based on scroll position
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
          const sections = ['about', 'experience', 'projects'];
          
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
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? styles.active : ''}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className={activeSection === 'experience' ? styles.active : ''}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={activeSection === 'projects' ? styles.active : ''}
            >
              Projects
            </button>
          </motion.nav>
        )}

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
              <span className={styles.greeting}>Hi, I'm</span>
              <span className={styles.name}>Harsha Vippala</span>
              <span className={styles.role}>Building high-scale, resilient backend systems</span>
            </h1>
            <p className={styles.description}>
              I'm a software engineer specializing in building exceptional digital experiences. 
              Currently working at 7-Eleven, enabling customers with a seamless, cashier-less shopping experience that's making convenience even more convenient.
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

        <section id="experience" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Experience
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.experienceContainer}
          >
            <div className={styles.timelineWrapper}>
              {experiences.map((exp, index) => {
                const isExpanded = expandedExperiences[index] || false;
                
                const toggleExpand = () => {
                  setExpandedExperiences(prev => ({
                    ...prev,
                    [index]: !prev[index]
                  }));
                };
                
                return (
                  <div className={styles.timelineItem} key={index}>
                    <div 
                      className={`${styles.timelineHeader} ${isExpanded ? styles.expanded : ''}`}
                      onClick={toggleExpand}
                    >
                      <div className={styles.timelineYear}>{exp.period.split(" - ")[0].split(" ")[1]}</div>
                      <div className={styles.timelineDot}>
                        <div className={styles.dot}></div>
                        {index !== experiences.length - 1 && <div className={styles.line}></div>}
                      </div>
                      <div className={styles.timelineCardLogo}>
                        <img src={exp.logo} alt={`${exp.company} logo`} />
                      </div>
                      <div className={styles.timelineSummary}>
                        <h3 className={styles.timelineRole}>{exp.title}</h3>
                        <div className={styles.timelineCompany}>{exp.company}</div>
                      </div>
                      <div className={styles.expandIcon}>
                        {isExpanded ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    {isExpanded && (
                      <div className={styles.timelineContent}>
                        <div className={styles.timelineDetails}>
                          <div className={styles.companyHeader}>
                            <div className={styles.roleInfo}>
                              <h3 className={styles.roleTitle}>{exp.title}</h3>
                              <div className={styles.company}>{exp.company}</div>
                    <div className={styles.period}>{exp.period}</div>
                    <div className={styles.location}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
                      </svg>
                      {exp.location}
        </div>
        </div>
                            <div className={styles.companyLogo}>
                              {exp.projectLink ? (
                                <a href={exp.projectLink} target="_blank" rel="noopener noreferrer" title={exp.projectTooltip || "View Project"}>
                                  <img src={exp.logo} alt={`${exp.company} logo`} />
                                </a>
                              ) : (
                                <img src={exp.logo} alt={`${exp.company} logo`} />
                              )}
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
                  </div>
                )}

                          {exp.tech && (
                <div className={styles.techStack}>
                  {exp.tech.map((tech, i) => (
                    <span key={i} className={styles.tech}>{tech}</span>
                  ))}
                </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </section>

        <section id="projects" className={styles.projects}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >Projects</motion.h2>
          
          <motion.div 
            className={styles.projectsGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.title} 
                className={styles.projectCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  {project.github && (
                    <a href={project.github} className={styles.githubLink} target="_blank" rel="noopener noreferrer" title="View on GitHub">
                      <img src="/github.svg" alt="GitHub" />
                    </a>
                  )}
                </div>
                
                <div className={styles.projectInfo}>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTech}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.projectLinks}>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </main>

      <motion.footer 
        className={styles.footer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Built by me with <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">Cursor</a> 🚀
        </motion.p>
      </motion.footer>
      
      <Analytics />
    </div>
  );
}
