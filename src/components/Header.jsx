import { useEffect, useState } from "react";
import { FaAngellist } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import linkedin from "../assets/images/linkedin-icon-2.svg";
import twitter from "../assets/images/twitter-x-seeklogo.com-4 2.svg";
import twitter2 from "../assets/images/twitter-x-seeklogo.com-4.svg";

const Header = () => {

  const [text, setText] = useState('');
  const message = `
  I am a software developer working productively in dynamic environments.
  Proud team player focused on achieving project objectives with speed and
  accuracy. 😎
  `

  useEffect(() => {
    let charIndex = 0;
    const typeText = () => {
      if (charIndex < message.length) {
        setText((prevText) => prevText + message.charAt(charIndex));
        charIndex += 1;
      }
    };

    const typingInterval = setInterval(typeText, 50);

    return () => clearInterval(typingInterval);
  }, [message]);
  
  return (
    <section className="bg-black text-white dark:bg-white dark:text-black rounded-3xl m-5 p-5 tablet:my-[10%] tablet:mx-[5%] laptop:p-16 desktop:mx-[10%] ">
      <h2 className="text-3xl italic mt-0 font-[mazius]">hello!</h2>
      <p className="text-base text-justify leading-5 tablet:text-left font-[avenir] font-normal">
        {text}
      </p>
      <div className="flex mt-5 tablet:justify-around laptop:justify-between">
        <div className="w-[30%] grid grid-cols-2 tablet:w-1/2 tablet:flex tablet:justify-around laptop:w-[30%] laptop:justify-start">
          <a
            href="https://www.linkedin.com/in/tumainimaganiko/"
            target="_blank"
            rel="noreferrer"
            className="p-0 mx-2"
          >
          <img src={linkedin} alt="linkedin logo" className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]" />
          </a>
          <a
            href="https://github.com/tumainimaganiko"
            target="_blank"
            rel="noreferrer"
            className="p-0 mx-2"
          >
            <BsGithub className="text-2xl text-white dark:text-black" />
          </a>
          <a
            href="https://wellfound.com/u/tumaini-maganiko"
            target="_blank"
            rel="noreferrer"
            className="p-0 mx-2"
          >
            <FaAngellist className="text-2xl text-white dark:text-black" />
          </a>
          <a
            href="https://twitter.com/Chief2maini"
            target="_blank"
            rel="noreferrer"
            className="p-0 mx-2"
          >
            <img src={twitter} alt="twitter logo" className="dark:hidden w-[40px] " />
          <img src={twitter2} alt="twitter logo" className="hidden dark:block  w-[40px]" />
          </a>
        </div>
        <div className="flex flex-col items-center w-[70%] tablet:w-1/2 tablet:justify-between tablet:flex-row laptop:w-[40%] laptop:justify-end">
          <a
            href="#project"
            className="no-underline py-[5px] px-[15px] border border-white dark:border-slate-950 rounded-[20px] text-white dark:text-slate-950 text-[11px] font-bold m-[2px] w-[165px] text-center hover:bg-white dark:hover:bg-[#2F3634] hover:text-black dark:hover:text-white font-[neutralface]"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="no-underline py-[5px] px-[15px] border border-white dark:border-slate-950 rounded-[20px] text-white dark:text-slate-950 text-[11px] font-bold m-[2px] w-[165px] text-center hover:bg-white dark:hover:bg-[#2F3634] hover:text-black dark:hover:text-white font-[neutralface]"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
