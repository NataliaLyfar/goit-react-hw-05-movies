import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThreeDots } from  'react-loader-spinner';
import { getMovieCast } from "api";
import { CastList } from "components/CastList";


const CastView = () => {
const [casts, setCast] = useState([]);
const { movieId } = useParams();
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  (async () => {
    try {
      setIsLoading(true);
      const {data} = await getMovieCast(movieId);
      setCast(data.cast);
      } catch (error) {
        toast.info(`Something went wrong ${error}`);
      } finally {setIsLoading(false)};
    })();
}, [movieId]);

  return (
    <>
      {isLoading && <ThreeDots color="#eead71" height={60} width={60} />}
      <CastList casts={casts} />
    </>
  ); 
};

export default CastView;