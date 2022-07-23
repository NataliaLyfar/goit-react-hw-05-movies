export const dataSelectedMovie = (movie) => {
    return {
        title: movie.title,
        overview: movie.overview,
        posterPath: movie.poster_path,
        year: movie.release_date ? parseInt(movie.release_date) : '',
        rating: movie.vote_average,
        tagline: movie.tagline,
        genres: movie.genres.map(({name}) => name).join(', '),
        country: movie.production_countries.map(country => country.name).join(', '),
        runtime: movie.runtime,  
    };
};