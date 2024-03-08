import {
  Movie,
  MovieDetails,
  Response,
  SearchResult,
  TimeWindow,
  TvDetails,
  TvShow,
} from "./types";

async function apiWrapper<T>(params: string): Promise<T> {
  return fetch("https://api.themoviedb.org/3" + params, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN as string}`,
    },
  }).then((res) => res.json());
}

export function getTrendingMovies(timeWindow: TimeWindow) {
  return apiWrapper<Response<Movie>>(`/trending/movie/${timeWindow}`);
}

// ***** DISCOVER *****
export function getMovies(query: string) {
  return apiWrapper<Response<Movie>>(`/discover/movie?${query}&language=en-US`);
}

export function getTvShows(query: string) {
  return apiWrapper<Response<TvShow>>(`/discover/tv?${query}&language=en-US`);
}

// ***** DETAILS *****
export function getMovieDetails(id: string) {
  return apiWrapper<MovieDetails>(
    `/movie/${id}?append_to_response=credits,videos,images`
  );
}

export function getTvDetails(id: string) {
  return apiWrapper<TvDetails>(
    `/tv/${id}?append_to_response=credits,videos,images`
  );
}

export function getPersonDetails(id: string) {
  return apiWrapper(
    `/person/${id}?append_to_response=external_ids,combined_credits`
  );
}

// ***** SEARCH *****
export function getSearchResults(query: string) {
  return apiWrapper<Response<SearchResult>>(
    `/search/multi?include_adult=false&language=en-US&page=1&query=${query}`
  );
}

// ***** GENRES *****
export function getGenres(mediaType: "tv" | "movie") {
  return apiWrapper(`/genre/${mediaType}/list?language=en-US`);
}
