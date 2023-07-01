const About = () => {
  return (
    <section id="about" className="my-[25%] mx-[5%] text-white tablet:flex tablet:mx-[5%] tablet:my-0">
      <h2 className="text-center text-[28px] italic tablet:text-left whitespace-nowrap">
        about me
      </h2>
      <div className="m-[2%]">
        <p className="text-justify mb-2">
          Welcome to my portfolio! I&apos;m Tumaini Maganiko, a dedicated
          full-stack software developer with a passion for crafting innovative
          digital solutions. From front-end design to back-end development, I
          strive to create intuitive user experiences and build robust, scalable
          applications.
        </p>
        <p className="text-justify mt-3">
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
