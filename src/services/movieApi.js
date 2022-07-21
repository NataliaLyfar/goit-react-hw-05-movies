import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3dd39359792eb7041e93855d90b9b314';

const customAxios = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
    },
});

export const searchParams = {
    query: '',
    page: 1,
};

export const getUpcoming = async () => {
    try {
      const { data } = await customAxios.get(`/movie/upcoming`, {params: searchParams});
      return data;
    } catch (error) {
        toast.error(`Oops, an error occurred! ${error}`);
    };
  };

export const getTrends = async () => {
    try {
        const {data} = await customAxios.get('/trending/movie/day', {params: searchParams});
        return data;
    } catch (error) {
        toast.error(`Oops, an error occurred! ${error}`);
    };
};

export const getGenres = async () => {
    try {
        const {data} = await customAxios.get('/genre/movie/list', {params: searchParams});
        return data;
    } catch (error) {
        toast.error(`Oops, an error occurred! ${error}`);
    };
};

export const getMovieDetails = async (id) => {
    try {
    const {data} = await customAxios.get(`/movie/${id}`, {params: searchParams});
    return data;
    } catch (error) {
        toast.error(`Oops, an error occurred! ${error}`);
    };
};

export const getMovieTrailer = async (id) => {
    try {
        const {data} = await customAxios.get(`/movie/${id}/videos`);
        return data;
    } catch (error) {
        console.log(error);
    };
};

export const getMovieCast = async (id) => {
    try {
        const data = customAxios.get(`/movie/${id}/credits`);
        return data;
    } catch (error) {
        toast.error(`Oops, an error occurred! ${error}`);
    };
};

export const getMovieReviews = async (id) => {
    try {
        const data = customAxios.get(`/movie/${id}/reviews`);
        return data;
    } catch (error) {
        toast.error(`Oops, an error occurred! ${error}`);
    };
};

export const getSimilarMovie = async (id) => {
    try {
        const data = customAxios.get(`/movie/${id}/similar`);
        return data;
    } catch (error) {
        toast.error(`Oops, an error occurred! ${error}`);
    };
};

export const getMovieBySearch = async () => {
    try {
        const data = customAxios.get(`/search/movie`, {params: searchParams});
        return data;
    } catch (error) {
        toast.error(`Oops, an error occurred! ${error}`);
    };
};

export const addRating = async(id, rating) => {
    try {
        const { data } = await customAxios.post(`/movie/${id}/${rating}`);
        return data;
    } catch (error) {
        toast.error(`Oops, an error occurred! ${error}`);
    };
};

export const getNowPlaying = async () => {
    try {
        const data  = customAxios.get(`/movie/now_playing`, {params: searchParams});
        return data;
    } catch (error) {
        toast.error(`Oops, an error occurred! ${error}`);
    };
};

export const getTopRated = async () => {
    try {
        const data  = customAxios.get(`/movie/top_rated`, {params: searchParams});
        return data;
    } catch (error) {
        toast.error(`Oops, an error occurred! ${error}`);
    };
};

export const getTPopular = async () => {
    try {
        const data = customAxios.get(`/movie/popular`, {params: searchParams});
        return data;
    } catch (error) {
        toast.error(`Oops, an error occurred! ${error}`);
    };
};