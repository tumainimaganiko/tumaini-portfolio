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
        I'm currently open to new opportunities, inbox is always open! Find me
        everywhere @tumainimaganiko
      </p>
      <div>
        <BiLogoGmail />
        <FaLinkedin />
        <BsGithub />
        <FaAngellist />
        <FaTwitter />
      </div>
    </section>
  );
};

export default Contact;
