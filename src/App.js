import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import MovieList from "./components/MovieList";

const API_KEY = "cc31d08b0d4b5b3539a406e5af2aec1f";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchTopRatedMovies();
  }, []);

  const handleSearch = async (query) => {
    if (query.trim() === "") return;
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === movie.id)) {
        return [...prevFavorites, movie];
      }
      return prevFavorites;
    });
  };

  return (
    <div>
      <Header />
      <SearchBox onSearch={handleSearch} />
      <MovieList movies={movies} addToFavorites={addToFavorites} />
      {favorites.length > 0 && (
        <div className="bg-gray-800 p-4 mt-4">
          <h2 className="text-white text-2xl">Favorite Movies</h2>
          <MovieList movies={favorites} />
        </div>
      )}
    </div>
  );
};

export default App;
