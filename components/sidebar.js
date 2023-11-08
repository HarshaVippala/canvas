import styles from "./sidebar.module.css";

export default function Sidebar({ children }) {
  return (
    <div className={styles.fixedContainer}>
      <div className={styles.socialIcons}>
        <a
          href="mailto:harsha.vippala1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/gmail.svg" alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/HarshaVippala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" alt="Facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/harsha-vippala-8bb809216/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.svg" alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/_harshavardhan_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/instagram.svg" alt="LinkedIn" />
        </a>
      </div>
      <div className={styles.verticalLineLeft}></div>
    </div>
  );
}
