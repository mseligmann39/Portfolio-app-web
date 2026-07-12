import styles from "./Home.module.css";

function Home({ profile }) {
  if (!profile) return null;

  const subtitle = profile.subtitle;

  return (
    <div className={styles.homeContainer}>
      <h1
        className={`${styles.name} fade-in-up-animation`}
        style={{ animationDelay: "0.2s" }}
      >
        {profile.name}
      </h1>
      <p
        className={`${styles.subtitle} fade-in-up-animation`}
        style={{ animationDelay: "0.5s" }}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default Home;
