import { customAxios } from "./api";
import { toast } from "react-toastify";


export const getUpcoming = async () => {
  try {
    const { data } = await customAxios.get(`/movie/upcoming`);
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};