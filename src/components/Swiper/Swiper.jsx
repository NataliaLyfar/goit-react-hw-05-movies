import { Virtual, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { SwiperCard } from './SwiperCard';


const SwiperWrapper = styled.div`
margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Slider = ({movies}) => {
  const location = useLocation();

  return(
    <SwiperWrapper>
      <Swiper modules={[Virtual, Autoplay, Navigation]}
        spaceBetween={5}
        slidesPerView={6}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          }}
        navigation={true}
        virtual>
        {movies.filter(movie => movie.poster_path).map(movie => {
          return (
            <SwiperSlide key={movie.id} virtualIndex={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{from: location}}>
                <SwiperCard {...movie}/>
              </Link>
            </SwiperSlide>
          );
        })}  
    </Swiper>
    </SwiperWrapper>
  );
};

Swiper.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    })
  ),
};