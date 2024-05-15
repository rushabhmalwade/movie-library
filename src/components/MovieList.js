// import React from 'react';
// import MovieCard from './MovieCard';

// const MovieList = ({ movies }) => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default MovieList;

import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
