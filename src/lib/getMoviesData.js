import axios from "axios";

export const baseUrl = "https://api.themoviedb.org/3";

export const getMoviesData = async (path, { page, query }) => {

  let paramsObject = {
    api_key: process.env.NEXT_PUBLIC_KEY,
    page: page,
  };
  if (query) {
    paramsObject ={
      ...paramsObject,
      query: query,
    }
  }

  try {
    const { data } = await axios.get(`${baseUrl}${path}`, {
      params: paramsObject,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
