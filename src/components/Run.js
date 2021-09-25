import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";

const Run = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "http://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      return res;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters__div">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`posters ${isLarge && "posterLarge"}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Run;
