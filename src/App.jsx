import { Routes, Route } from 'react-router-dom';
import { lazy, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import * as API from "services/movieApi";
import { MainLayout } from 'components/MainLayout';


const Home = lazy(() => import("pages/HomePage.jsx"));
const MovieInDetails = lazy(() => import("pages/MovieDetailsPage.jsx"));
const MoviesSearch = lazy(() => import("pages/MoviesSearchPage.jsx"));
const Cast = lazy(() => import("components/Casts/Casts.jsx"));
const Review = lazy(() => import("components/Reviews/Reviews.jsx"));
const Trailer = lazy(() => import("components/Trailers/Trailers.jsx"));
const SimilarMovie = lazy(() => import("components/SimilarMovie/SimilarMovie.jsx"));

export const App = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {...data} = await API.getGenres();
        setGenres(data.genres);
      } catch (error) {
        toast.info(`Something went wrong ${error}`);
      };
    })();
  }, []);

  return (
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home genres={genres}/>} />
          <Route path='movies/:movieId/*' element={<MovieInDetails/>}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
            <Route path="trailer" element={<Trailer />} />
            <Route path="similar" element={<SimilarMovie />} />
          </Route>
          <Route path='movies' element={<MoviesSearch genres={genres}/>}/>
        </Route>
      </Routes>
  );
};
