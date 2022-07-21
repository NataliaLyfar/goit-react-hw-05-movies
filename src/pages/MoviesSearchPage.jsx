import { useState, useEffect } from "react";
import { useSearchParams} from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';
import styled from "styled-components";
import Iframe from "react-iframe";
import * as API from "services/movieApi";
import { dataMovie } from "services/dataMovie";
import { MoviesGallery } from "components/Gallery";
import { Container } from "components/ui/Container";
import { Section } from "components/ui/Section";
import { SearchBar } from "components/SearchBar";
import { Button } from "components/button/Button";
import { Title } from "components/Title";
import { Slider } from "components/Swiper";



const TrailerWrapper = styled.div`
margin-bottom: ${p => p.theme.space[3]}px;
`;

const MoviesSearch = ({genres}) => {
const [movies, setMovies] = useState([]);
const [page, setPage] = useState(1);
const [queryParam, setQueryParam] = useSearchParams({});
const [nowPlaying, setNowPlaying] = useState([]);
const [topRated, setTopRated] = useState([]);
const [popularId, setTPopularId] = useState([]);
const [trailer, setTrailer] = useState("");

const query = queryParam.get('query');

useEffect(() => {
  if(!query){
    return;
  };
  (async () => {
    API.searchParams.page = page;
    API.searchParams.query = query;
    try {
        const {...response} = await API.getMovieBySearch(API.searchParams);
        const { data } = response;
        const newMovies = dataMovie(data.results, genres);
          if(newMovies.length > 0){
            if(API.searchParams.page === 1){
              setMovies([...newMovies]);
            } else {
              setMovies(prevState => [...prevState,...newMovies]);};
          } else {
            toast.info('Sorry, there are no movies matching your search query. Please try again.');
          };
        } catch (error) {
          toast.info(`Something went wrong ${error}`);
        };
  })();
}, [query, genres, page]);

useEffect(() => {
  if(!query){
  (async () => {
    try {
        const {...datas} = await API.getNowPlaying();
        setNowPlaying([...datas.data.results]);
        const {...response} = await API.getTopRated();
        setTopRated([...response.data.results]);
        const {...data} = await API.getTPopular();
        setTPopularId(data.data.results[0].id);
        } catch (error) {
          toast.info(`Something went wrong ${error}`);
        };
  })();
}
}, [genres, query]);

useEffect(() => {
  (async () => {
    try {
      const {...data} = await API.getMovieTrailer(popularId);
      setTrailer(data.results[0].key);
    } catch (error) {
      console.log(error);
    };
  })();
}, [popularId]);

const handleSearch = (query) => {
  setQueryParam({query: query});
};

const handleLoadMore = () => {
  setPage(page => page + 1);
};

return (
    <Container>
      <Section>
        <SearchBar onSearch={handleSearch} />
        {nowPlaying.length > 0 && (
        <>
        <Title>Now playing</Title>
        <Slider movies={nowPlaying}/>
        </>)}
        {movies.length > 0 && query.length > 0 && <MoviesGallery movies={movies} />}
        {movies.length >= 20 && <Button onClick={handleLoadMore}>Load more</Button>}    
        {movies.length === 0 && trailer &&
          <TrailerWrapper>
            <Iframe trailer={trailer}
              url={`https://www.youtube.com/embed/${trailer}`}
              width="100%"
              height="600px"
              allowFullScreen
            />
          </TrailerWrapper>}
        {nowPlaying.length > 0 && (
        <>
        <Title>Top rated</Title>
        <Slider movies={topRated}/>
        </>)}
      </Section>
    </Container>
  );
};

MoviesSearch.propTypes = {
  genresList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesSearch;