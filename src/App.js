import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function App() {
  const url = "https://course-api.com/react-tabs-project";
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2 className="loading section">Loading...</h2>;
  }

  const user = users[index];

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center" key={user.id}>
          <div className="btn-container">
            {users.map((item, i) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setIndex(i)}
                  className={`job-btn ${index === i && "active-btn"}`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>

          <article className="job-info">
            <h3>{user.title}</h3>
            <h4>{user.company}</h4>
            <p className="job-date">{user.dates}</p>
            {user.duties.map((duty) => {
              return (
                <div className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
        <button className="btn">more-info</button>
      </section>
    </main>
  );
}

export default App;
