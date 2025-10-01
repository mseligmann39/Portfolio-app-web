import { useOutletContext } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  const { profile } = useOutletContext();

  if (!profile) return null;

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
        {profile.subtitle}
      </p>
    </div>
  );
}

export default Home;
