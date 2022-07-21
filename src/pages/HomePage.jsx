import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';
import { TiArrowSync } from "react-icons/ti";
import * as API from 'services/movieApi';
import { dataMovie } from "services/dataMovie";
import { MoviesGallery } from "components/Gallery";
import { Container } from "components/ui/Container";
import { Section } from "components/ui/Section";
import { Button } from "components/button/Button";
import { Slider } from "components/Swiper";
import { Title } from "components/Title";


const Home = ({genres}) => {
const [movies, setMovies] = useState([]);
const [swipeMovies, setSwipeMovies] = useState([]);
const [page, setPage] = useState(1);

useEffect(() => {
    (async () => {
      API.searchParams.page = page;
      if(genres.length){
        try {
            const {...data} = await API.getTrends(API.searchParams);
            const newMovies = dataMovie(data.results, genres);
            const {...swipeData} = await API.getUpcoming();
            setSwipeMovies([...swipeData.results]);
            if(API.searchParams.page === 1){
              setMovies([...newMovies]);
            } else {
              setMovies(prevState => [...prevState,...newMovies]);};         
         } catch (error) {
           toast.info(`Something went wrong ${error}`);
         };
      };
    })();
},[genres, page]);

const handleLoadMore = () => {
  setPage(page => page + 1);
};

return (
    <Section>
      <Container>
        <Title>Upcoming</Title>
          {swipeMovies.length !== 0 && <Slider movies={swipeMovies}/>}
        <Title>Trending</Title>
          {movies.length !== 0 && <MoviesGallery movies={movies}/>}
          {movies.length >= 20 && 
          <Button onClick={handleLoadMore} icon={<TiArrowSync/>}>
            Load more
          </Button>}
      </Container>
    </Section>
  );
};

Home.propTypes = {
  genresList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Home;