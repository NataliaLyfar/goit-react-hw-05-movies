import { customAxios } from "./api";
import { toast } from "react-toastify";


export const getTopRated = async () => {
  try {
    const data  = customAxios.get(`/movie/top_rated`);
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};