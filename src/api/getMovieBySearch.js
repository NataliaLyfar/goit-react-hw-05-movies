import * as API from "./api";
import { toast } from "react-toastify";

  
export const getMovieBySearch = async () => {
  try {
    const data = await API.customAxios.get(`/search/movie`, {params: API.searchParams});
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};