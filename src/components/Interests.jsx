import styles from "../styles/Interests.module.css";

const Interests = () => {
  return (
    <section className={styles.container}>
      <h2>interests</h2>
      <p>Some things I enjoy learning about & doing</p>
      <div>
        <span>SOFTWARE</span>
        <span>EXPLORING THINGS</span>
        <span>BUILDING PROJECTS</span>
        <span>MUSIC 💕</span>
        <span>MOVIES</span>
        <span>FOOTBALL</span>
      </div>
    </section>
  );
};

export default Interests;
