import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { MainLayout } from 'layout';


const HomePage = lazy(() => import("pages"));
const MovieInDetailsPage = lazy(() => import("pages/MovieInDetails"));
const Cast = lazy(() => import("pages/MovieInDetails/CastView"));
const Review = lazy(() => import("pages/MovieInDetails/ReviewView"));
const Trailer = lazy(() => import("pages/MovieInDetails/TrailerView"));
const SimilarMovie = lazy(() => import("pages/MovieInDetails/SimilarView"));
const MoviesSearchPage = lazy(() => import("pages/MovieSearch"));


export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Navigate to="home"/>} />
          <Route path="home" element={<HomePage/>} />
          <Route path='movies/:movieId/*' element={<MovieInDetailsPage/>}>
          <Route index element={<SimilarMovie />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
            <Route path="trailer" element={<Trailer />} />
            <Route path="similar" element={<SimilarMovie />} />
          </Route>
          <Route path='movies' exact element={<MoviesSearchPage/>}/>
          <Route path="*" element={<Navigate to="home" />} />
        </Route>
      </Routes>
  );
};
