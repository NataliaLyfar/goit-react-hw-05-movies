import { customAxios } from "./api";
import { toast } from "react-toastify";

export const getMovieReviews = async (id) => {
  try {
    const data = await customAxios.get(`/movie/${id}/reviews`);
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};