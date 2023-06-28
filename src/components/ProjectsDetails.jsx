import img from '../assets/images/testingImg.png'
import styles from '../styles/ProjectsDetails.module.css'
import reactLogo from '../assets/images/react-1.svg';
import reduxLogo from '../assets/images/redux.svg';
import cssLogo from '../assets/images/css-3.svg';
import htmlLogo from '../assets/images/html-1.svg';

const ProjectsDetails = () => {
    const imgStyles = {
        width: '100%'
    }
  return (
    <section className={styles.container}>
      <div>
        <img src={img} alt="testing" style={imgStyles} />
      </div>
      <h2>Space Travelers App</h2>
      <p>
        Space Travelers&apos; Hub is a react application for a company that deals
        with transporting people to space using rockets. This web application
        allows users to book rockets and join selected space missions. Also,
        users can cancel or leave joined mission at any time. Built with React
        and Redux.
      </p>
      <div className={styles.iconDiv}>
      <div>
        <img src={reactLogo} alt="" className={styles.logo} />
        <img src={reduxLogo} alt="" className={styles.logo} />
        <img src={htmlLogo} alt="" className={styles.logo} />
        <img src={cssLogo} alt="" className={styles.logo} />
      </div>
      <a href="https://github.com/tumainimaganiko/space-travelers">VIEW CODE</a>
      </div>
    </section>
  );
};

export default ProjectsDetails;
