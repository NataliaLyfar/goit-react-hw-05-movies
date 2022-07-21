import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from "components/ui/Container";
import * as API from 'services/movieApi';
import { dataSelectedMovie } from 'services/dataSelectedMovie';
import { MovieDetails } from 'components/MovieDetails';
import { BackLink } from 'components/BackLink';


const MovieInDetails = () => {
const { movieId } = useParams();
const [movie, setMovie] =useState({});
const location = useLocation();
const backLinkHref = location.state?.from ?? "/";

useEffect(() => {
  (async () => {
    try {
      const {...data} = await API.getMovieDetails(movieId);
      setMovie(dataSelectedMovie(data));
    } catch (error) {
      toast.info(`Something went wrong ${error}`);
    };
})()
}, [movieId]);
    
return(
  <Container>
    <BackLink to={backLinkHref}/>
    <MovieDetails {...movie} id={movieId} location={location}/>
  </Container>
  );
};

export default MovieInDetails;