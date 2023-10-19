const About = () => {
  return (
    <section
      id="about"
      className="my-[25%] mx-[5%] dark:text-white tablet:flex tablet:mx-[5%] tablet:my-0 laptop:w-[60%] laptop:my-0 laptop:mx-auto"
    >
      <h2 className="text-center text-[28px] laptop:text-3xl italic tablet:text-left whitespace-nowrap font-[mazius]">
        about me
      </h2>
      <div className="m-[2%] laptop:my-1 font-[avenir] text-justify">
        <p className="mb-2 ">
          Welcome! I&apos;m Tumaini Maganiko, a dedicated full-stack software
          developer with a passion for crafting innovative digital solutions.
          From front-end design to back-end development, I strive to create
          intuitive user experiences and build robust, scalable applications.
        </p>
        <p className="mt-3">
          On the back-end, I leverage my expertise in Ruby and Rails to
          architect efficient and secure systems. Throughout my career, I have
          collaborated with diverse teams and clients, delivering successful
          projects that push the boundaries of what technology can achieve.
        </p>
      </div>
    </section>
  );
};

export default About;
