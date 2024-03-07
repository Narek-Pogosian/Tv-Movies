export type SearchParams = { [key: string]: string | string[] | undefined };

export type TimeWindow = "day" | "week";
export type MediaType = "movie" | "tv" | "person";

/**
 * ****** GENRES ******
 */
export interface Genre {
  id: number;
  name: string;
}

export interface GetGenreRespone {
  genres: Genre[];
}

/**
 * ****** RESPONSE ******
 */
export interface Response<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
}

/**
 * ****** SEARCH ******
 */
export interface SearchResult {
  poster_path: string;
  profile_path: string;
  id: number;
  media_type: MediaType;
  name?: string;
  title?: string;
  popularity: number;
}

/**
 * ****** MOVIE OR TV ******
 */
interface MovieOrTv {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Movie extends MovieOrTv {
  title: string;
  original_title: string;
  release_date: string;
}

export interface TvShow extends MovieOrTv {
  name: string;
  original_name: string;
  first_air_date: string;
}

/**
 * ****** MOVIE OR TV DETAILS ******
 */
export interface MovieDetails extends Omit<Movie, "genre_ids"> {
  credits: MovieCredits;
  budget: number;
  genres: { id: number; name: string }[];
  revenue: number;
  runtime: number;
  spoken_languages: { iso_639_1: string; name: string; english_name: string }[];
  status: string;
  tagline: string;
  videos: {
    results: Video[];
  };
}

export interface Video {
  id: string;
  type: string;
  key: string;
}

export interface TvDetails extends Omit<TvShow, "genre_ids"> {
  status: string;
  credits: MovieCredits;
  genres: Genre[];
  tagline: string;
  spoken_languages: { iso_639_1: string; name: string; english_name: string }[];
  number_of_seasons: number;
  in_production: boolean;
  last_air_date: string;
  videos: {
    results: Video[];
  };
  networks: {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
  }[];
}

/**
 * ****** MOVIE CREDITS ******
 */
export interface MovieCredits {
  cast: MovieCast[];
  crew: MovieCrew[];
}

export interface MovieCast {
  id: number;
  known_for_department: string;
  name: string;
  character: string;
  profile_path: string;
  popularity: number;
}

export interface MovieCrew {
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  profile_path: string;
  popularity: number;
}

/**
 * ****** PERSON ******
 */
export interface Person {
  biography: string;
  birthday: string;
  known_for_department: string;
  place_of_birth: string;
  profile_path: string;
  name: string;
  combined_credits: PersonCredits;
  credits: PersonCast[];
}

interface PersonCredits {
  cast: PersonCast[];
  crew: PersonCast[];
}

export interface PersonCast {
  id: number;
  media_type: string;
  poster_path: string;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  popularity: number;
}
