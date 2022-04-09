import axios from "axios";

export const baseUrl = "https://api.themoviedb.org/3";

export interface IaxiosGet {
  page: number;
  query?: string | number;
}

export interface IParamsObject {
  api_key?:string;
  page: number;
  query?: string | number;
}
export const getMoviesData = async (path:string, { page, query }: IaxiosGet) => {
  let paramsObject:IParamsObject = {
    api_key: process.env.NEXT_PUBLIC_KEY,
    page: page,
  };
  if (query) {
    paramsObject = {
      ...paramsObject,
      query: query,
    };
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

export const getMovieDetail = async (path:string) => {
  let paramsObject = {
    api_key: process.env.NEXT_PUBLIC_KEY,
  };
  try {
    const { data } = await axios.get(`${baseUrl}${path}`, {
      params: paramsObject,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
