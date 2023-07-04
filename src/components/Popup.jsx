import { HiXMark } from "react-icons/hi2";
import { useSelector } from "react-redux";

const Popup = ({ popup, updatePopup, id }) => {
  const { projects } = useSelector((store) => store.projects);
  return (
    <>
      {popup && (
        <>
          <div className="fixed left-[50%] w-[90%] translate-x-[-50%] top-[50%] translate-y-[-50%] laptop:h-3/4 laptop:w-1/2 border border-red-600 opacity-100 bg-white text-black z-[1000]">
            <button
              onClick={() => updatePopup(false)}
              className="absolute laptop:fixed right-1 top-1"
            >
              <HiXMark />
            </button>
            <div className="p-3">
              <h2 className="text-center font-bold">
              {projects[id].name}
              </h2>
              <img className="w-full h-1/2" src={projects[id].image} alt="" />
              <p className="">
              {projects[id].description}
              </p>
              <div className="flex justify-between">
                <a className="px-4 bg-[#272D2B] text-white py-2" href={projects[id].liveLink} target="_blank">SEE LIVE</a>
                <a className="px-4 bg-[#272D2B] text-white py-2" href={projects[id].githubLink} target="_blank">SEE SOURCE</a>
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
