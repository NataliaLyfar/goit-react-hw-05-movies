import * as API from "./api";
import { toast } from "react-toastify";


export const getTrends = async (page) => {
  try {
    const {data} = await API.customAxios.get(`/trending/movie/week`, {params: API.searchParams});
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  };
};