import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import * as API from 'services/movieApi';
import { SimilarMovieCard } from "./SimilarMovieCard";


const MoviesList = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;

const Item = styled.li`
margin: ${p => p.theme.space[2]}px;
`;

const SimilarMovie = () => {
const [movies, setMovies] = useState([]);
const { movieId } = useParams();
const location = useLocation();

useEffect(() => {
  (async () => {
    try {
      const {...response} = await API.getSimilarMovie(movieId);
      const newMovies = response.data.results;
      setMovies([...newMovies]);
      } catch (error) {
        console.log(error);
      };
    })();
}, [movieId]);

  return (
    <MoviesList>
      {movies.map(movie => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{from: location}}>
          <SimilarMovieCard {...movie}/>
          </Link>
        </Item>)
      )}
    </MoviesList>
  );
};

export default SimilarMovie;