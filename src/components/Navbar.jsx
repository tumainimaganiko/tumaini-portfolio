import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./MobileMenu";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      {!display && (
        <nav className="flex justify-between text-center p-4 border-b border-[#272D2B] items-center">
          <h1 className="text-3xl italic font-[mazius] tablet:text-4xl">Tumaini Maganiko</h1>
          <div className="tablet:hidden">
          <DarkMode myClass={"text-2xl"}/>
          <button onClick={() => setDisplay(true)}>
            <GiHamburgerMenu className="text-2xl" />
          </button>
          </div>
          <div className="hidden font-[neutralface] tablet:block">
            <a
              href="#about"
              className="p-2 border m-3 rounded-3xl text-xs hover:bg-black hover:text-white dark:hover:bg-[#2F3634] border-[#2F3634]"
            >
              ABOUT
            </a>
            <a
              href="#project"
              className="p-2 border m-3 rounded-3xl text-xs hover:bg-black hover:text-white dark:hover:bg-[#2F3634] border-[#2F3634]"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="p-2 border m-3 rounded-3xl text-xs hover:bg-black hover:text-white dark:hover:bg-[#2F3634] border-[#2F3634]"
            >
              GET IN TOUCH
            </a>
            <DarkMode myClass={"p-2 border m-3 rounded-3xl text-xs hover:bg-black hover:text-white dark:hover:bg-[#2F3634] border-[#2F3634]"} />
          </div>
        </nav>
      )}
      <MobileMenu
        display={display}
        updateDisplay={(view) => setDisplay(view)}
      />
    </>
  );
};

export default Navbar;
