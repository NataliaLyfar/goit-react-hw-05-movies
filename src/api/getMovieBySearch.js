import * as API from "./api";
import { toast } from "react-toastify";

  
export const getMovieBySearch = async (query, page) => {
  try {
    const data = await API.customAxios.get(`/search/movie?query=${query}&page=${page}`);
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};