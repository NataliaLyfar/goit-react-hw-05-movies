import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThreeDots } from  'react-loader-spinner';
import { getMovieReviews } from "api";
import { ReviewList} from "components/ReviewList";


const ReviewView = () => {
const [reviews, setReviews] = useState([]);
const { movieId } = useParams();
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  (async () => {
    try {
      const {data} = await getMovieReviews(movieId);
        setReviews(data.results);
    } catch (error) {
      toast.info(`Something went wrong ${error}`);
    } finally {setIsLoading(false)};
  })();
}, [movieId]);

  return (
    <>
      {isLoading && <ThreeDots color="#eead71" height={60} width={60} />}
      <ReviewList reviews={reviews} />
    </>
  );
};

export default ReviewView;