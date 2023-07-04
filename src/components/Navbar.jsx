import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const updateDisplay = (view) => {
    setDisplay(view);
  };
  return (
    <>
      {!display && (
        <nav className="flex justify-between text-center p-4 border-b border-[#272D2B] items-center">
          <h1 className="text-3xl italic tablet:text-4xl">Tumaini Maganiko</h1>
          <button onClick={() => setDisplay(true)}>
            <GiHamburgerMenu className="text-2xl tablet:text-4xl laptop:hidden" />
          </button>
          <div className="hidden laptop:block">
            <a
              href="#about"
              className="p-2 border m-3 rounded-3xl text-xs hover:bg-[#2F3634] border-[#2F3634]"
            >
              ABOUT
            </a>
            <a
              href="#project"
              className="p-2 border m-3 rounded-3xl text-xs hover:bg-[#2F3634] border-[#2F3634]"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="p-2 border m-3 rounded-3xl text-xs hover:bg-[#2F3634] border-[#2F3634]"
            >
              GET IN TOUCH
            </a>
          </div>
        </nav>
      )}
      <MobileMenu display={display} updateDisplay={updateDisplay} />
    </>
  );
};

export default Navbar;
