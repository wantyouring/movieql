let movies = [
  {
    id: 0,
    name: '타짜',
    score: 3,
  },
  {
    id: 1,
    name: '어벤져스',
    score: 5,
  },
  {
    id: 2,
    name: '스파이더맨',
    score: 4,
  },
];
export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length}`,
    name,
    score,
  };

  movies.push(newMovie);
  return newMovie;
};
