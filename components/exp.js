import React from 'react';
import styles from './exp.module.css';

export default function Experience({ imageSrc, companyName, employmentDates, children }) {
  return (
    <div className={styles.experience}>
      <div className={styles.companyInfo}>
        <img src={imageSrc} alt={companyName} className={styles.companyLogo} />
        <div className={styles.companyDetails}>
          <div className={styles.companyName}>{companyName}</div>
          <div className={styles.employmentDates}>{employmentDates}</div>
        </div>
      </div>
      <ul className={styles.summaryList}>
        {children}
      </ul>
    </div>
  );
}
