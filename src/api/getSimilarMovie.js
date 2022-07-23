import { customAxios } from "./api";
import { toast } from "react-toastify";

export const getSimilarMovie = async (id) => {
  try {
    const data = await customAxios.get(`/movie/${id}/similar`);
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};