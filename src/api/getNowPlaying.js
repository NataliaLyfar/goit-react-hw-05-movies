import { customAxios } from "./api";
import { toast } from "react-toastify";

export const getNowPlaying = async () => {
  try {
    const data = customAxios.get(`/movie/now_playing`);
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};