import reactLogo from "../assets/images/react-2.svg";

const Interests = () => {
  return (
    <section className="my-[25%] mx-[5%] tablet:my-[10%] tablet:mx-[5%] desktop:mx-[10%]">
      <h2 className="text-center text-[28px] italic font-[mazius]">Technologies</h2>
      <p className="text-center pt-2 font-[avenir]">
        Some things I enjoy learning about & doing
      </p>
      <div className="grid grid-cols-2 font-[neutralface] tablet:grid-cols-3 grid-rows-layout tablet:grid-rows-layoutMD gap-[10px] pt-5 tablet:pt-7">
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-black text-white dark:bg-[#272d2b] text-center text-[14px] font-bold">
          ReactJS
          <img src={reactLogo} alt="react logo" className="m-[5px] w-[20px] tablet:my-[5px] tablet:mx-[10px]" />
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-black text-white dark:bg-[#272d2b] text-center text-[14px] font-bold">
          EXPLORING THINGS
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-black text-white dark:bg-[#272d2b] text-center text-[14px] font-bold">
          BUILDING PROJECTS
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-black text-white dark:bg-[#272d2b] text-center text-[14px] font-bold">
          MUSIC 💕
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-black text-white dark:bg-[#272d2b] text-center text-[14px] font-bold">
          MOVIES
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-black text-white dark:bg-[#272d2b] text-center text-[14px] font-bold">
          FOOTBALL
        </span>
      </div>
    </section>
  );
};

export default Interests;
