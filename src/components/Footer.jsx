import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        <a href="">ABOUT</a>
        <a href="">PROJECTS</a>
        <a href="">CONTACT</a>
      </div>
      <p>@2023 Tumaini Maganiko All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
