import { customAxios } from "./api";

export const addRating = async(id, rating) => {
  const { data } = await customAxios.post(`/movie/${id}/${rating}`);
  return data;
};