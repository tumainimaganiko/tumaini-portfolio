import ProjectsDetails from "./ProjectsDetails";

const Projects = () => {
  return (
    <section id="project" className="my-0 mx-[5%] desktop:mx-[10%]">
      <h2 className="text-center font-[mazius] font-normal leading-normal italic text-[28px]">
        projects
      </h2>
      <p className="text-center font-[avenir] font-normal leading-normal">
        some things I&apos;ve worked (am working) on
      </p>
      <ProjectsDetails />
    </section>
  );
};

export default Projects;
