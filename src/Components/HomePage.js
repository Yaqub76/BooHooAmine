import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to MyAnimeList</h1>
      <p>Check out our list of anime!</p>
      <Link to="/app">Go to Anime List</Link>
    </div>
  );
}

export default HomePage;
