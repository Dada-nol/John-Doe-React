import React, { useEffect, useState } from "react";

function John() {
  const [github, setGithub] = useState([]);

  const getGithub = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setGithub(json);
  };
  useEffect(() => {
    getGithub();
  }, []);

  return (
    <section>
      <div>
        <img href={github.avatar_url} alt="avatar de John Doe"></img>
      </div>

      <p>
        As we all kwon, John Doe's identity is unknown. I just wanted to
        contribuate without being known.
      </p>

      <ul>
        <li>Abonnés : {github.followers}</li>
        <li>Abonnement : {github.following}</li>
        <li>Crée le : {github.create_at}</li>
        <li>Modifié le : {github.update_at}</li>
        <li>
          URL repositories : <a href={github.repos_url}>{github.repos_url}</a>
        </li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Github user</h1>
        <h2>John Doe</h2>
      </header>

      <main>
        <John></John>
      </main>
    </div>
  );
}

export default App;
