import { FaLinkedin } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <section className={styles.container}>
      <h2>hello!</h2>
      <p>
        I&apos;m Tumaini, and I currently attend Microverse for Full-stack
        development. Welcome to my first web dev project 😎
      </p>
      <div className={styles.details}>
        <div>
            <a href="https://www.linkedin.com/in/tumainimaganiko/" target="_blank" rel="noreferrer"><FaLinkedin className={styles.logo} /></a>
            <a href="https://github.com/tumainimaganiko" target="_blank" rel="noreferrer"><BsGithub className={styles.logo} /></a>
            <a href="https://wellfound.com/u/tumaini-maganiko" target="_blank" rel="noreferrer"><FaAngellist className={styles.logo} /></a>
            <a href="https://twitter.com/Chief2maini" target="_blank" rel="noreferrer"><FaTwitter className={styles.logo} /></a>
        </div>
        <div>
        <a href="https://github.com/tumainimaganiko" target="_blank" rel="noreferrer">VIEW PROJECTS</a>
        <a href="https://github.com/tumainimaganiko" target="_blank" rel="noreferrer">GET IN TOUCH</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
