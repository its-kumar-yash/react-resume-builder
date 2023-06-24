import React from "react";

import styles from "./Resume.module.css";
import { AtSign, GitHub, Linkedin, Phone } from "react-feather";

const Resume = (props) => {
    
    const workExpSection = (
        <div className={`${styles.section} ${styles.workExp}`}>
            <div className={styles.sectionTitle}>Work Experience</div>
        </div>
    );

    const projectSection = (
        <div className={`${styles.section} ${styles.project}`}>
            <div className={styles.sectionTitle}>Projects</div>
        </div>
    );
    const educationSection = (
        <div className={`${styles.section} ${styles.education}`}>
            <div className={styles.sectionTitle}>Education</div>
        </div>
    );
    const achievementSection = (
        <div className={`${styles.section} ${styles.achievement}`}>
            <div className={styles.sectionTitle}>Achievement</div>
        </div>
    );
    const summarySection = (
        <div className={`${styles.section} ${styles.summary}`}>
            <div className={styles.sectionTitle}>Summary</div>
        </div>
    );
    const otherSection = (
        <div className={`${styles.section} ${styles.other}`}>
            <div className={styles.sectionTitle}>Other</div>
        </div>
    );
  
  
  
  
  
    return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>Name</p>
        <p className={styles.subHeading}>Blockchain Developer</p>

        <div className={styles.links}>
          <a className={styles.link}>
            <AtSign /> Email@gmail.com
          </a>
          <a className={styles.link}>
            <Phone /> 890678532
          </a>
          <a className={styles.link}>
            <Linkedin /> www.linkedin.com
          </a>
          <a className={styles.link}>
            <GitHub /> www.github.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
