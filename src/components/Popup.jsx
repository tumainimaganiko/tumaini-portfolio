import { HiXMark } from "react-icons/hi2";
import { useSelector } from "react-redux";

const Popup = ({popup, updatePopup,id}) => {
    const { projects } = useSelector(store => store.projects)
  return (
    <>
        {popup && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black">
              <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-3/4 w-1/2 border border-red-600 bg-white text-black">
              <button onClick={() => updatePopup(false)} className="fixed right-1 top-1">
                <HiXMark />
              </button>
              <p>{projects[id].name}</p>
            </div>
            </div>
          )}
    </>
  )
}

export default Popup;