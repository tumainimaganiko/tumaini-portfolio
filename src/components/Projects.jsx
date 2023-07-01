import ProjectsDetails from "./ProjectsDetails";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  return (
    <section className="my-0 mx-[5%]">
      <h2 className="text-center font-normal leading-normal italic text-[28px]">projects</h2>
      <p className="text-center font-normal leading-normal">some things I&apos;ve worked (am working) on</p>
      <ProjectsDetails />
    </section>
  );
};

export default Projects;
