import { HiXMark } from "react-icons/hi2";
import { useSelector } from "react-redux";

const Popup = ({ popup, updatePopup, id }) => {
  const { projects } = useSelector((store) => store.projects);

  return (
    <>
      {popup && (
        <>
          <div className="fixed left-[50%] w-[90%] translate-x-[-50%] top-[50%] translate-y-[-50%] laptop:h laptop:w-[70%] border rounded-3xl opacity-100 bg-white text-black z-[1000]">
            <button
              onClick={() => updatePopup(false)}
              className="absolute laptop:fixed right-3 top-2 laptop:right-4 laptop:top-3"
            >
              <HiXMark />
            </button>
            <div className="p-3">
              <h2 className="text-center font-bold">{projects[id].name}</h2>
              <img className="w-full h-1/2" src={projects[id].image} alt="" />
              <p className="text-justify">{projects[id].description}</p>
              <div className="flex justify-between">
                {id === 3 ? (
                  <>
                    <a
                      className="px-4 bg-[#272D2B] border border-[#272D2B]laptop:bg-[black] hover:laptop:bg-[bisque]  rounded-3xl text-xs text-white hover:text-black hover:border-black py-2"
                      href={projects[id].liveLink}
                      target="_blank"
                    >
                      SEE LIVE
                    </a>
                    <a
                      className="px-4 bg-[#272D2B] border border-[#272D2B]laptop:bg-[black] hover:laptop:bg-[bisque]  rounded-3xl text-xs text-white hover:text-black hover:border-black py-2"
                      href={projects[id].githubLink}
                      target="_blank"
                    >
                      SEE SOURCE
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      className="px-4 bg-[#272D2B] border border-[#272D2B]laptop:bg-[black] hover:laptop:bg-blue-500  rounded-3xl text-xs text-white py-2"
                      href={projects[id].liveLink}
                      target="_blank"
                    >
                      SEE LIVE
                    </a>
                    <a
                      className="px-4 bg-[#272D2B] border border-[#272D2B]laptop:bg-[black] hover:laptop:bg-blue-500  rounded-3xl text-xs text-white py-2"
                      href={projects[id].githubLink}
                      target="_blank"
                    >
                      SEE SOURCE
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/10 z-[800] backdrop-blur-sm" onClick={() => updatePopup(false)}></div>
        </>
      )}
    </>
  );
};

export default Popup;
