import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { MainLayout } from 'layout';


const Home = lazy(() => import("pages/HomePage"));
const MovieInDetails = lazy(() => import("pages/MovieInDetails/MovieInDetailsPage"));
const Cast = lazy(() => import("pages/MovieInDetails/CastView"));
const Review = lazy(() => import("pages/MovieInDetails/ReviewView"));
const Trailer = lazy(() => import("pages/MovieInDetails/TrailerView"));
const SimilarMovie = lazy(() => import("pages/MovieInDetails/SimilarView"));
const MoviesSearch = lazy(() => import("pages/MoviesSearchPage"));


export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Navigate to="home"/>} />
          <Route path="home" element={<Home/>} />
          <Route path='movies/:movieId/*' element={<MovieInDetails/>}>
          <Route index element={<SimilarMovie />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
            <Route path="trailer" element={<Trailer />} />
            <Route path="similar" element={<SimilarMovie />} />
          </Route>
          <Route path='movies' exact element={<MoviesSearch/>}/>
          <Route path="*" element={<Navigate to="home" />} />
        </Route>
      </Routes>
  );
};
