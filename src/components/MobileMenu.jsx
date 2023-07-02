import { HiXMark } from "react-icons/hi2";

const MobileMenu = ({ display, updateDisplay }) => {
  return (
    display && (
      <div className="fixed left-0 right-0 top-0 bottom-0 bg-black opacity-80 z-20 backdrop-blur-lg">
      <div className="bg-blue-600 fixed w-[90%] mx-[5%] h-[90%] top-[5%] bottom-[5%]">
          <button onClick={() => updateDisplay(false)}>
            <HiXMark />
          </button>
          <ul>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#about">PROJECTS</a>
            </li>
            <li>
              <a href="#about">GET IN TOUCH</a>
            </li>
          </ul>
        </div>
       </div>
    )
  );
};

export default MobileMenu;
