import reactLogo from "../assets/images/react-2.svg";
import reduxLogo from "../assets/images/redux.svg";
import railsLogo from "../assets/images/rails-1.svg";
import jsLogo from "../assets/images/javascript-1.svg";
import rubyLogo from "../assets/images/ruby.svg";
import tailwindLogo from "../assets/images/tailwindcss.svg";

const Interests = () => {
  return (
    <section className="my-[25%] mx-[5%] tablet:my-[10%] tablet:mx-[5%] desktop:mx-[10%]">
      <h2 className="text-center text-[28px] italic font-[mazius]">Technologies & Languages</h2>
      <p className="text-center pt-2 font-[avenir]">
        I take pleasure in working with a variety of languages and frameworks.
      </p>
      <div className="grid grid-cols-2 tablet:grid-cols-3 grid-rows-layout tablet:grid-rows-layoutMD gap-[10px] pt-5 tablet:pt-7">
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-black text-white dark:bg-[#272d2b] text-center text-[14px] font-bold">
          JavaScript
          <img src={jsLogo} alt="react logo" className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]" />
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-black text-white dark:bg-[#272d2b] text-center text-[14px] font-bold">
          Ruby
          <img src={rubyLogo} alt="react logo" className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]" />
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-black text-white dark:bg-[#272d2b] text-center text-[14px] font-bold">
          ReactJS
          <img src={reactLogo} alt="react logo" className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]" />
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-black text-white dark:bg-[#272d2b] text-center text-[14px] font-bold">
          Redux
          <img src={reduxLogo} alt="react logo" className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]" />
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-black text-white dark:bg-[#272d2b] text-center text-[14px] font-bold">
          Ruby on Rails
          <img src={railsLogo} alt="react logo" className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]" />
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-black text-white dark:bg-[#272d2b] text-center text-[14px] font-bold">
          Tailwind CSS
          <img src={tailwindLogo} alt="react logo" className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]" />
        </span>
      </div>
    </section>
  );
};

export default Interests;
