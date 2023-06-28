import ProjectsDetails from "./ProjectsDetails";
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.container}>
      <h2>projects</h2>
      <p>some things I&apos;ve worked (am working) on</p>
      <ProjectsDetails />
    </section>
  );
};

export default Projects;
