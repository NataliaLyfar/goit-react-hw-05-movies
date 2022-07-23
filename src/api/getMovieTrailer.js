import { customAxios } from "./api";

export const getMovieTrailer = async (id) => {
  const { data } = await customAxios.get(`/movie/${id}/videos`);
  return data;
};