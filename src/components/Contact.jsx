import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container}>
      <h2>get in touch</h2>
      <p>
        I&apos;m currently open to new opportunities, inbox is always open! Find me
        everywhere @tumainimaganiko
      </p>
      <div>
        <a href="mailto:tumainimaganiko@gmail.com?" target="_blank" rel="noreferrer">
          <BiLogoGmail />
        </a>
        <a href="https://www.linkedin.com/in/tumainimaganiko/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/tumainimaganiko">
          <BsGithub />
        </a>
        <a href="https://wellfound.com/u/tumaini-maganiko">
          <FaAngellist />
        </a>
        <a href="https://twitter.com/Chief2maini">
          <FaTwitter />
        </a>
      </div>
    </section>
  );
};

export default Contact;
