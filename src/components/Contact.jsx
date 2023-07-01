import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="text-white border-b border-[#272d2b] pt-0 px-[5%] pb-[70px] tablet:my-[10%] tablet:mx[15%]">
      <h2 className="text-center text-[28px] italic font-normal leading-normal">
        get in touch
      </h2>
      <p className="text-center">
        I&apos;m currently open to new opportunities, inbox is always open! Find
        me everywhere @tumainimaganiko
      </p>
      <div className="flex justify-around text-2xl pt-[15px]">
        <a
          href="mailto:tumainimaganiko@gmail.com?"
          target="_blank"
          rel="noreferrer"
          className="no-underline"
        >
          <BiLogoGmail />
        </a>
        <a
          href="https://www.linkedin.com/in/tumainimaganiko/"
          target="_blank"
          className="no-underline"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/tumainimaganiko"
          target="_blank"
          className="no-underline"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://wellfound.com/u/tumaini-maganiko"
          target="_blank"
          className="no-underline"
          rel="noreferrer"
        >
          <FaAngellist />
        </a>
        <a
          href="https://twitter.com/Chief2maini"
          target="_blank"
          className="no-underline"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
};

export default Contact;
