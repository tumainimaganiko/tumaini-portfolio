const Interests = () => {
  return (
    <section className="my-[25%] mx-[5%] tablet:my-[10%] tablet:mx-[5%]">
      <h2 className="text-center text-[28px] italic">interests</h2>
      <p className="text-center pt-2">
        Some things I enjoy learning about & doing
      </p>
      <div className="grid grid-cols-2 tablet:grid-cols-3 grid-rows-layout tablet:grid-rows-layoutMD gap-[10px] pt-5 tablet:pt-7">
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-[#272d2b] text-center text-[14px] font-bold">
          SOFTWARE
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-[#272d2b] text-center text-[14px] font-bold">
          EXPLORING THINGS
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-[#272d2b] text-center text-[14px] font-bold">
          BUILDING PROJECTS
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-[#272d2b] text-center text-[14px] font-bold">
          MUSIC 💕
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-[#272d2b] text-center text-[14px] font-bold">
          MOVIES
        </span>
        <span className="flex justify-center shadow-xl items-center rounded-[10px] bg-[#272d2b] text-center text-[14px] font-bold">
          FOOTBALL
        </span>
      </div>
    </section>
  );
};

export default Interests;
