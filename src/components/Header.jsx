import { FaLinkedin } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <section className="bg-white text-black rounded-3xl m-5 p-5 md:my-[10%] md:mx-[5%]">
      <h2 className="text-3xl italic mt-0 ">hello!</h2>
      <p className="text-base text-justify leading-5 md:text-left ">
        I&apos;m Tumaini, and I currently attend Microverse for Full-stack
        development. Welcome to my first web dev project 😎
      </p>
      <div className="flex mt-5 md:justify-around">
        <div className="w-[30%] grid grid-cols-2 md:flex justify-around">
          <a
            href="https://www.linkedin.com/in/tumainimaganiko/"
            target="_blank"
            rel="noreferrer"
            className="p-0"
          >
            <FaLinkedin className="text-2xl text-black" />
          </a>
          <a
            href="https://github.com/tumainimaganiko"
            target="_blank"
            rel="noreferrer"
            className="p-0"
          >
            <BsGithub className="text-2xl text-black" />
          </a>
          <a
            href="https://wellfound.com/u/tumaini-maganiko"
            target="_blank"
            rel="noreferrer"
            className="p-0"
          >
            <FaAngellist className="text-2xl text-black" />
          </a>
          <a
            href="https://twitter.com/Chief2maini"
            target="_blank"
            rel="noreferrer"
            className="p-0"
          >
            <FaTwitter className="text-2xl text-black" />
          </a>
        </div>
        <div className="flex flex-col items-center w-[70%] md:flex-row">
          <a
            href="https://github.com/tumainimaganiko"
            target="_blank"
            rel="noreferrer"
            className="no-underline py-[5px] px-[15px] border border-slate-950 rounded-[20px] text-slate-950 text-[11px] font-bold m-[2px] w-[165px] text-center"
          >
            VIEW PROJECTS
          </a>
          <a
            href="https://github.com/tumainimaganiko"
            target="_blank"
            rel="noreferrer"
            className="no-underline py-[5px] px-[15px] border border-slate-950 rounded-[20px] text-slate-950 text-[11px] font-bold m-[2px] w-[165px] text-center"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
