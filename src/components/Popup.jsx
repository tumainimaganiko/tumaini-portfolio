import { HiXMark } from "react-icons/hi2";
import { useSelector } from "react-redux";

const Popup = ({ popup, updatePopup, id }) => {
  const { projects } = useSelector((store) => store.projects);
  return (
    <>
      {popup && (
        <>
          <div className="fixed w-[90%] h-[80%] left-[5%] right-[5%] top-[10%] bottom-[10%] laptop:top-[50%] laptop:left-[50%] laptop:translate-x-[-50%] laptop:translate-y-[-50%] laptop:h-3/4 laptop:w-1/2 border border-red-600 opacity-100 bg-white text-black z-[1000]">
            <button
              onClick={() => updatePopup(false)}
              className="absolute laptop:fixed right-1 top-1"
            >
              <HiXMark />
            </button>
            <div>
              <h2 className="text-center">
              {projects[id].name}
              </h2>
              <p>{projects[id].description}</p>
              <img src={projects[id].image} alt="" />
              <div>
                <a href={projects[id].liveLink}>SEE LIVE</a>
                <a href={projects[id].githubLink}>SEE SOURCE</a>
              </div>
            </div>
          </div>
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/10 z-[800] backdrop-blur-sm"></div>
        </>
      )}
    </>
  );
};

export default Popup;
