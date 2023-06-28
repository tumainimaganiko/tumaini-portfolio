import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.container}>
      <h2>about me</h2>
      <div>
        <p>
          Welcome to my portfolio! I'm Tumaini Maganiko, a dedicated full-stack
          software developer with a passion for crafting innovative digital
          solutions. From front-end design to back-end development, I strive to
          create intuitive user experiences and build robust, scalable
          applications.
        </p>
        <p>
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
