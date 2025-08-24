import { useOutletContext } from 'react-router-dom';

function Home() {
  const { profile } = useOutletContext();

  if (!profile) return null;

  return (
    <div className="home-container">
      <h1 className="name fade-in-up-animation" style={{ animationDelay: '0.2s' }}>
        {profile.name}
      </h1>
      <p className="subtitle fade-in-up-animation" style={{ animationDelay: '0.5s' }}>
        {profile.subtitle}
      </p>
    </div>
  );
}

export default Home;
