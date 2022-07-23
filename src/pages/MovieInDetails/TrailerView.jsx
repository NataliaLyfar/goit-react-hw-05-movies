import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThreeDots } from  'react-loader-spinner';
import { getMovieTrailer } from "api";
import { TrailerList } from "components/TrailerList";


const TrailerView = () => {
const [trailers, setTrailers] = useState([]);
const { movieId } = useParams();
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  (async () => {
    try {
      setIsLoading(true);
      const {results} = await getMovieTrailer(movieId);
      setTrailers(results);
    } catch (error) {
      toast.info(`Something went wrong ${error}`);
    } finally {setIsLoading(false)};
  })();
}, [movieId]);

return (
  <>
    {isLoading && <ThreeDots color="#eead71" height={60} width={60} />}
    <TrailerList trailers={trailers} /> 
  </>
  );  
};

export default TrailerView;