import React, { useState } from "react";
import axios from "axios";
import "./UserFinder.css";

const UserFinder = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    if (username === "") return alert("Enter valid GitHub UserName !");
    event.preventDefault();
    fetchUserData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter a GitHub username"
        />
        <button type="submit">Get Data</button>
      </form>

      {user && (
        <section className="searchResult">
          <div className="profileImg">
            <img src={user.avatar_url} alt="" />
          </div>

          <div className="profileInfo">
            <div className="first">
              <div>
                <span>Name:</span>
                <span id="name">{user.name}</span>
              </div>
              <div>
                <span>Portfolio:</span>
                <a href={user.blog} target="_blank">
                  Portfolio
                </a>
              </div>
            </div>

            <div className="second">
              <div>
                <span>Location:</span>
                <span>{user.location}</span>
              </div>
              <div>
                <span>Public Repo:</span>
                <span>{user.public_repos}</span>
              </div>
            </div>

            <div className="third">
              <div>
                <span>Follower:</span>
                <span>{user.followers}</span>
              </div>
              <div>
                <span>Bio:</span>
                <span>{user.bio}</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default UserFinder;
