import PropTypes from "prop-types";
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import { SimilarMovieCard } from "./SimilarMovieCard";


const List = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;
const Item = styled.li`
margin: ${p => p.theme.space[2]}px;
`;

export const SimilarMovieList = ({ movies }) => {
const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{from: location}}>
          <SimilarMovieCard {...movie}/>
          </Link>
        </Item>)
      )}
    </List>
  );
};

SimilarMovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    })
  ),
};