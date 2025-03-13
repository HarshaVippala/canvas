import React, { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "/styles/Home.module.css";
import Head from "next/head";
import * as THREE from 'three';

// ... [Previous code remains unchanged until the overview section]

        <section id="overview" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.docPrefix}>./</span>OVERVIEW.md
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
                  Welcome to my personal website. I'm a Software Engineer who approaches each project with care and a focus on user-centered solutions. I believe in crafting thoughtful, practical applications that effectively address everyday challenges.
                </p>
                <p>
                  At 7-Eleven, I work on building and maintaining serverless microservices that ensure reliable transaction processing. My approach is grounded in continuous learning and a commitment to solid, well-designed systems.
                </p>
                <p>
                  Outside of work, I find inspiration in following Formula 1, enjoying live music, and exploring immersive video games. These interests help maintain a balanced perspective, which in turn enriches my technical creativity.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

// ... [Rest of the code remains unchanged]