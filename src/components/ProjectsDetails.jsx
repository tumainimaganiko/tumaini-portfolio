import reactLogo from "../assets/images/react-1.svg";
import reduxLogo from "../assets/images/redux.svg";
import uuid4 from 'uuid4';
import cssLogo from "../assets/images/css-3.svg";
import htmlLogo from "../assets/images/html-1.svg";
import { useSelector } from "react-redux";

const ProjectsDetails = () => {
  const { projects } = useSelector((store) => store.projects);
  return (
    <section className="pb-[28px]">
      {projects.map((item) => (
            <div key={uuid4()} className="border-b border-[#272d2b] py-5 px-0 last:border-none md:flex md:border-none md:gap-x-[20px] md:even:flex-row-reverse">
              <div className="md:w-1/2">
                <img src={item.image} alt="testing" className="w-full object-cover md:w-full md:h-full md:object-fill md:p-0" />
              </div>
              <div className="md:w-1/2">
                <h2 className="m-0 text-[#859591]">{item.name}</h2>
                <p className="text-left">{item.description}</p>
                <div className="flex justify-between">
                  <div className="flex">
                    <img src={reactLogo} alt="" className="m-[5px] w-[20px] md:my-[5px] md:mx-[10px]" />
                    <img src={reduxLogo} alt="" className="m-[5px] w-[20px] md:my-[5px] md:mx-[10px]" />
                    <img src={htmlLogo} alt="" className="m-[5px] w-[20px] md:my-[5px] md:mx-[10px]" />
                    <img src={cssLogo} alt="" className="m-[5px] w-[20px] md:my-[5px] md:mx-[10px]" />
                  </div>
                  <a href={item.githubLink} className="no-underline bg-[#2f3634] text-white py-[10px] px-[15px] rounded-[30px] text-[14px] font-bold">VIEW CODE</a>
                </div>
              </div>
            </div>
      ))}
    </section>
  );
};

export default ProjectsDetails;
