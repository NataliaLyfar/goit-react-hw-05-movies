import { useState, useEffect } from "react";
import { useSearchParams} from "react-router-dom";
import { toast } from 'react-toastify';
import styled from "styled-components";
import Iframe from "react-iframe";
import { ThreeDots } from  'react-loader-spinner';
import * as API from "api";
import { dataMovie } from "utils/dataMovie";
import { MoviesGallery } from "components/MoviesGallery";
import { Container } from "components/ui/Container";
import { Section } from "components/ui/Section";
import { SearchBar } from "components/SearchBar";
import { Button } from "components/ui/buttons";
import { Title } from "components/ui/Title";
import { Slider } from "components/Swiper";


const TrailerWrapper = styled.div`
margin-bottom: ${p => p.theme.space[3]}px;
`;

const MoviesSearch = () => {
const [movies, setMovies] = useState([]);
const [page, setPage] = useState(1);
const [queryParam, setQueryParam] = useSearchParams({});
const [nowPlaying, setNowPlaying] = useState([]);
const [topRated, setTopRated] = useState([]);
const [popularId, setTPopularId] = useState([]);
const [trailer, setTrailer] = useState("");
const [genres, setGenres] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const query = queryParam.get('query') ?? '';


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
  if(!query){
    return;
  };
  (async () => {
    API.searchParams.page = page;
    API.searchParams.query = query;
    try {
        setIsLoading(true);
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
        } finally {setIsLoading(false)};   
  })();
}, [genres, page, query]);

useEffect(() => {
  (async () => {
    try {
        setIsLoading(true);
        const {data} = await API.getNowPlaying();
        setNowPlaying([...data.results]);
        const {...response} = await API.getTopRated();
        setTopRated([...response.data.results]);
        const {...datas} = await API.getPopular();
        setTPopularId(datas.data.results[0].id);
        } catch (error) {
          toast.info(`Something went wrong ${error}`);
        } finally {setIsLoading(false)};
  })();
}, [genres]);

useEffect(() => {
  (async () => {
    try {
      setIsLoading(true);
      const data = await API.getMovieTrailer(popularId);
      if(data?.results){
      setTrailer(data.results[0]);}
    } catch (error) {
    } finally {setIsLoading(false)};
  })();
}, [popularId]);

const handleSearch = (query) => {
  const nextParams = query!== "" ? 
  {"query": query} : {};
  setQueryParam(nextParams);
  setPage(1);
  setMovies([]);
};

const handleLoadMore = () => {
  setPage(page => page + 1);
};

return (
    <Container>
      {isLoading && <ThreeDots color="#eead71" height={60} width={60}/>}
      <Section>
        <SearchBar onSearch={handleSearch} />
        {nowPlaying.length > 0 && (
          <>
            <Title>Now playing</Title>
            <Slider movies={nowPlaying}/>
          </>)}
        {movies.length > 0 && <MoviesGallery movies={movies} /> }
        {movies.length >= 20 && <Button onClick={handleLoadMore}>Load more</Button>}           
        {movies.length === 0 && trailer && 
          <TrailerWrapper >
            <Iframe trailer={trailer}
              url={`https://www.youtube.com/embed/${trailer.key}`}
              width="100%"
              height="600px"
              allowFullScreen/>
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

export default MoviesSearch;