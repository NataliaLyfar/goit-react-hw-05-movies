import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { ThreeDots } from  'react-loader-spinner';
import { TiArrowSync } from "react-icons/ti";
import * as API from 'api';
import { dataMovie } from "utils/dataMovie";
import { MoviesGallery } from "components/MoviesGallery";
import { Container } from "components/ui/Container";
import { Section } from "components/ui/Section";
import { Button } from "components/ui/buttons";
import { Slider } from "components/Swiper";
import { Title } from "components/ui/Title";


const HomePage = () => {
const [movies, setMovies] = useState([]);
const [swipeMovies, setSwipeMovies] = useState([]);
const [page, setPage] = useState(1);
const [genres, setGenres] = useState([]);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  (async () => {
    try {
      const {genres} = await API.getGenres();
      setGenres(genres);
    } catch (error) {
      toast.info(`Something went wrong ${error}`);
    };
  })();
}, []);

useEffect(() => {
    (async () => {      
        try {           
            setIsLoading(true);
            const {results} = await API.getTrends(page);
            const newMovies = dataMovie(results, genres);
            const {...swipeData} = await API.getUpcoming();
            setSwipeMovies([...swipeData.results]);
            if(page === 1){
              setMovies([...newMovies]);
            } else {
              setMovies((prevState) => [...prevState,...newMovies]);}       
            } catch (error) {
              toast.info(`Something went wrong ${error}`);
            } finally {setIsLoading(false)};
    })();
},[genres, page]);

const handleLoadMore = () => {
  setPage(page => page + 1);
};

return (
  <Container>
    {isLoading && <ThreeDots color="#eead71" height={60} width={60} />}
    <Section>      
      {swipeMovies.length !== 0 && (
        <>
          <Title>Upcoming</Title>
          <Slider movies={swipeMovies}/>
        </>)}
      {movies.length !== 0 &&(
        <>
          <Title>Trending</Title>
          <MoviesGallery movies={movies}/>
        </>)}
      {!isLoading && movies.length >= 20 && 
        <Button onClick={handleLoadMore} icon={<TiArrowSync/>}>
          Load more
        </Button>}
    </Section>
  </Container>
  );
};

export default HomePage;