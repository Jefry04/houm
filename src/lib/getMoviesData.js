import axios from "axios";

export const baseUrl = "https://api.themoviedb.org/3/movie";

export const getMoviesData = async (url, page) => {
  const params = {
    params: {
      api_key: process.env.SECRET_API_KEY,
      page: page,
    },
  };
  try {
    const { data } = await axios.get(url, params);
    return data;
  } catch (error) {
    console.log(error);
  }
};
