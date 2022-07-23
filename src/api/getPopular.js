import { customAxios } from "./api";
import { toast } from "react-toastify";


export const getPopular = async () => {
  try {
    const data = customAxios.get(`/movie/popular`);
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};