import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { toast } from 'react-toastify';
import * as API from "services/movieApi";
import { ReviewItem } from "./ReviewItem";

const ReviewsList = styled.ul`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`;
const Notification = styled.p`
padding: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.semibold};
font-family: ${p => p.theme.fonts.accent};
font-style: italic;
margin: 0 auto;
`;

const Review = () => {
const [reviews, setReviews] = useState([]);
const { movieId } = useParams();

useEffect(() => {
  (async () => {
    try {
      const {data} = await API.getMovieReviews(movieId);
        setReviews(data.results);
    } catch (error) {
      toast.info(`Something went wrong ${error}`);
    };
  })();
}, [movieId]);

return (
  <ReviewsList>
    {reviews.length > 0 ? (
    reviews.map((item) => (
      <li key={item.id}>
        <ReviewItem {...item}/>
      </li>
      ))
    ) : <Notification>No Reviews</Notification>
    }
  </ReviewsList>
  );
};

export default Review;