import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MovieCard } from "./MovieCard";


const MoviesList = styled.ul`
display: grid;
max-width: calc(100vw - 32px);
grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
grid-gap: ${p => p.theme.space[5]}px;
margin: 0 auto ${p => p.theme.space[4]}px;
padding: 0;
`;
const Item = styled.li`
padding: 0;
border-radius: ${p => p.theme.radii.small};
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 2px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const MoviesGallery = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesList>
      {movies.map(movie => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{from: location}}>
          <MovieCard {...movie}/>
          </Link>
        </Item>)
      )}
    </MoviesList>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string,
    genres: PropTypes.string,
    rating: PropTypes.number,
    year: PropTypes.any,
    })
  ),
};