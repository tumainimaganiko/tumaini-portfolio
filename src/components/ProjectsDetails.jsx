import styles from "../styles/ProjectsDetails.module.css";
import reactLogo from "../assets/images/react-1.svg";
import reduxLogo from "../assets/images/redux.svg";
import cssLogo from "../assets/images/css-3.svg";
import htmlLogo from "../assets/images/html-1.svg";
import { useSelector } from "react-redux";

const ProjectsDetails = () => {
  const { projects } = useSelector((store) => store.projects);
  const imgStyles = {
    width: "100%",
  };
  return (
    <section className={styles.container}>
      {projects.map((item) => (
        <>
          <div>
            <div>
              <img src={item.image} alt="testing" style={imgStyles} />
            </div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
          <div className={styles.iconDiv}>
            <div>
              <img src={reactLogo} alt="" className={styles.logo} />
              <img src={reduxLogo} alt="" className={styles.logo} />
              <img src={htmlLogo} alt="" className={styles.logo} />
              <img src={cssLogo} alt="" className={styles.logo} />
            </div>
            <a href={item.githubLink}>VIEW CODE</a>
          </div>
        </>
      ))}
    </section>
  );
};

export default ProjectsDetails;
