import PropTypes from "prop-types";
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating'
import * as API from 'services/movieApi';

export const StarRating = ({id, value}) => {
const [rating, setRating] = useState(null); 

const handleRating = (rate) => {
  setRating(rate);
  addRating(rate/10);
};

const addRating = async (value) => {
  try {
    await API.addRating(id,value);
  } catch (error) {
    console.log(error);
  };
};

  return (
    <div >
      <Rating onClick={handleRating}
       ratingValue={rating}
        iconsCount={10}
        initialValue={value}
        allowHalfIcon={true}
        size={20} />
    </div>
  );
};

StarRating.propTypes = {
  id: PropTypes.string,
  value: PropTypes.number,
};