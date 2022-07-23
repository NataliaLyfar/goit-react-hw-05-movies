import { customAxios } from "./api";
import { toast } from "react-toastify";

export const getGenres = async () => {
  try {
    const { data } = await customAxios.get('/genre/movie/list');
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};