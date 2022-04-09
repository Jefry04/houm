export interface Movies {
    page: number;
    results: IMovies[];
    total_pages: number;
    total_results: number;
  }
  export interface IMovies {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }