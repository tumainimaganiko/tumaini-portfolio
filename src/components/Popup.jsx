import { HiXMark } from "react-icons/hi2";
import { useSelector } from "react-redux";

const Popup = ({ popup, updatePopup, id }) => {
  const { projects } = useSelector((store) => store.projects);
  return (
    <>
      {popup && (
        <>
          <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-3/4 w-1/2 border border-red-600 opacity-100 bg-white text-black z-[1000]">
            <button
              onClick={() => updatePopup(false)}
              className="fixed right-1 top-1"
            >
              <HiXMark />
            </button>
            <div>
              <h2>{projects[id].name}</h2>
              <p>{projects[id].description}</p>
              <img src={projects[id].image} alt="" />
            </div>
          </div>
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/10 z-[800] backdrop-blur-sm"></div>
        </>
      )}
    </>
  );
};

export default Popup;
