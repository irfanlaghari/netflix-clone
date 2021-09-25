import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../request";
import "./Banner.css";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(request.fetchNetflix);
      setMovies(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
      return res;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movies?.title || movies.name || movies.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My Lsit</button>
        </div>

        <h1 className="banner__discription">{movies?.overview}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
