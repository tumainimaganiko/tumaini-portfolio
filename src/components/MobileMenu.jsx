import PropTypes from "prop-types";
import { HiXMark } from "react-icons/hi2";

const MobileMenu = ({ display, updateDisplay }) => {
  return (
    display && (
      <div className="bg-black text-white opacity-90 fixed w-full  h-full top-0 bottom-0 right-0 left-0">
        <button
          onClick={() => updateDisplay(false)}
          className="absolute top-2 right-2 text-2xl"
        >
          <HiXMark />
        </button>
        <ul className="flex flex-col items-center gap-y-3 my-9 ">
          <li className="m-1">
            <button onClick={() => updateDisplay(false)}>
              <a
                className="p-2 border m-3 rounded-3xl text-xs active:bg-[#2F3634] border-[#2F3634]"
                href="#about"
              >
                ABOUT
              </a>
            </button>
          </li>
          <li className="m-1">
            <button onClick={() => updateDisplay(false)}>
              <a
                className="p-2 border m-3 rounded-3xl text-xs active:bg-[#2F3634] border-[#2F3634]"
                href="#project"
              >
                PROJECTS
              </a>
            </button>
          </li>
          <li className="m-1">
            <button onClick={() => updateDisplay(false)}>
              <a
                className="p-2 border m-3 rounded-3xl text-xs active:bg-[#2F3634] border-[#2F3634]"
                href="#contact"
              >
                GET IN TOUCH
              </a>
            </button>
          </li>
        </ul>
      </div>
    )
  );
};

export default MobileMenu;

MobileMenu.propTypes = PropTypes.shape({
  display: PropTypes.bool,
  updateDisplay: PropTypes.func,
}).isRequired;
