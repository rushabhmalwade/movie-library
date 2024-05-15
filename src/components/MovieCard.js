// import React from 'react';

// const MovieCard = ({ movie }) => {
//   return (
//     <div className="bg-gray-800 text-white m-4 p-4 w-64">
//       <img src={movie.poster_path} alt={movie.title} className="w-full" />
//       <h2 className="text-xl mt-2">{movie.title}</h2>
//       <p>Ratings: {movie.vote_average}</p>
//       <p>Release Date: {movie.release_date}</p>
//       <p>{movie.overview}</p>
//       <button className="bg-green-500 text-white p-2 mt-2">Add to Favorite</button>
//     </div>
//   );
// };

// export default MovieCard;


// import React from 'react';

// const MovieCard = ({ movie }) => {
//   const movieImgURL = 'https://image.tmdb.org/t/p/w342';

//   return (
//     <div className="bg-gray-800 text-white m-4 p-4 w-64 rounded-lg shadow-lg">
//       <img src={`${movieImgURL}${movie.poster_path}`} alt={movie.title} className="w-full h-96 object-cover rounded-lg" />
//       <h2 className="text-xl mt-2">{movie.title}</h2>
//       <p className="text-gray-400">Ratings: {movie.vote_average}</p>
//       <p className="text-gray-400">Release Date: {movie.release_date}</p>
//       <p className="mt-2 text-sm">{movie.overview.substring(0, 100)}...</p>
//       <button className="bg-green-500 text-white p-2 mt-2 w-full rounded">Add to Favorite</button>
//     </div>
//   );
// };

// export default MovieCard;


import React from 'react';

const MovieCard = ({ movie }) => {
  const movieImgURL = 'https://image.tmdb.org/t/p/w342';

  return (
    <div className="bg-gray-800 text-white m-4 p-4 w-64 rounded-lg shadow-lg">
      <img src={`${movieImgURL}${movie.poster_path}`} alt={movie.title} className="w-full h-96 object-cover rounded-lg" />
      <h2 className="text-xl mt-2">{movie.title}</h2>
      <p className="text-gray-400">Ratings: {movie.vote_average}</p>
      <p className="text-gray-400">Release Date: {movie.release_date}</p>
      <p className="mt-2 text-sm">{movie.overview.substring(0, 100)}...</p>
      <button className="bg-green-500 text-white p-2 mt-2 w-full rounded">Add to Favorite</button>
    </div>
  );
};

export default MovieCard;
