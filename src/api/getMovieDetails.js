import { customAxios } from "./api";
import { toast } from "react-toastify";
 
export const getMovieDetails = async (id) => {
  try {
    const { data } = await customAxios.get(`/movie/${id}`);
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};