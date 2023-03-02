import React, { useState, useEffect } from "react";
import axios from "axios";

function Movies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.jikan.moe/v3/search/anime?q=naruto"
      );
      setData(response.data.results);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Results:</h1>
      <ul>
        {data.map(item => (
          <li key={item.mal_id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
