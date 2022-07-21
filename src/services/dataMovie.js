export const dataMovie = (movies, allGenres) => {
  return movies.map(movie => ({
    ...movie,
    posterPath: movie.poster_path,
    year: movie.release_date ? parseInt(movie.release_date) : '',
    rating: movie.vote_average,
    genres: movie.genre_ids
      .map(id => allGenres.find(el => el.id === id)?.name)
      .slice(0, 3).join(', '),
  }));
};
