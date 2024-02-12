import React, { useEffect, useState } from "react";
import "./index.css";

function John() {
  const [profile, setProfile] = useState([]);

  const getProfile = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setProfile(json);
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <section>
      <div>
        <img href={profile.avatar_url} alt="avatar de John Doe"></img>
      </div>

      <div>
        <p>
          As we all kwon, John Doe's identity is unknown. I just wanted to
          contribuate without being known.
        </p>
      </div>

      <div>
        <p>Abonnés : {profile.followers}</p>
        <p>Abonnement : {profile.following}</p>
        <p>Crée le : {profile.create_at}</p>
        <p>Modifié le : {profile.update_at}</p>
        <p>
          URL repositories : <a href={profile.repos_url}>{profile.repos_url}</a>
        </p>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1>Github user</h1>
          <h2>John Doe</h2>
        </div>
      </header>

      <main>
        <John></John>
      </main>
    </div>
  );
}

export default App;
