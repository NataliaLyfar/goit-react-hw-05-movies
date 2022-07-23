import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThreeDots } from  'react-loader-spinner';
import { getSimilarMovie } from "api";
import { SimilarMovieList } from "components/SimilarMovieList";


const SimilarView = () => {
const [movies, setMovies] = useState([]);
const { movieId } = useParams();
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  (async () => {
    try {
      setIsLoading(true);
      const {data} = await getSimilarMovie(movieId);
      const newMovies = data.results;
      setMovies([...newMovies]);
      } catch (error) {
        toast.info(`Something went wrong ${error}`);
      } finally {setIsLoading(false)};
    })();
}, [movieId]);

  return (
    <>
      {isLoading && <ThreeDots color="#eead71" height={60} width={60} />}
      <SimilarMovieList movies={movies} />
    </>
  ); 
};

export default SimilarView;