const Footer = () => {
  return (
    <footer className="my-[10%] tablet:my-[3%] mx-[5%] laptop:py-0 laptop:my-[2%]">
      <div className="flex justify-around font-[neutralface] laptop:justify-center">
        <a
          href="#about"
          className="no-underline text-white text-[14px] font-normal leading-normal mx-10"
        >
          ABOUT
        </a>
        <a
          href="#project"
          className="no-underline text-white text-[14px] font-normal leading-normal mx-10"
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className="no-underline text-white text-[14px] font-normal leading-normal mx-10"
        >
          CONTACT
        </a>
      </div>
      <p className="font-normal leading-normal font-[avenir] pt-5 text-center">
        @2023 Tumaini Maganiko All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
