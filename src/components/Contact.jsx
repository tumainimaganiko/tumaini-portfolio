import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import gmail from "../assets/images/official-gmail-icon-2020-.svg";
import linkedin from "../assets/images/linkedin-icon-2.svg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-black dark:bg-black dark:text-white border-b border-[#272d2b] pt-0 px-[5%] pb-[70px] tablet:my-[10%] tablet:mx[15%] laptop:px-[20%] tablet:mb-0"
    >
      <h2 className="text-center font-[mazius] text-[28px] italic font-normal leading-normal">
        get in touch
      </h2>
      <p className="text-center font-[avenir]">
        I&apos;m currently open to new opportunities, inbox is always open! Find
        me everywhere @tumainimaganiko
      </p>
      <div className="flex justify-around text-2xl pt-[15px] laptop:justify-center">
        <a
          href="mailto:tumainimaganiko@gmail.com?"
          target="_blank"
          rel="noreferrer"
          className="no-underline laptop:mx-5"
        >
          <img src={gmail} alt="react logo" className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/tumainimaganiko/"
          target="_blank"
          className="no-underline laptop:mx-5"
          rel="noreferrer"
        >
          <img src={linkedin} alt="react logo" className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]" />
        </a>
        <a
          href="https://github.com/tumainimaganiko"
          target="_blank"
          className="no-underline laptop:mx-5"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://wellfound.com/u/tumaini-maganiko"
          target="_blank"
          className="no-underline laptop:mx-5"
          rel="noreferrer"
        >
          <FaAngellist />
        </a>
        <a
          href="https://twitter.com/Chief2maini"
          target="_blank"
          className="no-underline laptop:mx-5"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
};

export default Contact;
