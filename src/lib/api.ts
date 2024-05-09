import {
  Movie,
  MovieDetails,
  Person,
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
  }).then((res) => {
    if (!res.ok) throw Error("Something went wrong");
    return res.json();
  });
}

// Make sure to export the function in the api object at the bottom.

function getTrendingMovies(timeWindow: TimeWindow) {
  return apiWrapper<Response<Movie>>(`/trending/movie/${timeWindow}`);
}

function getMovies(query: string) {
  const voteCountQuery = query.includes("vote_count.gte")
    ? ""
    : "&vote_count.gte=20";

  return apiWrapper<Response<Movie>>(
    `/discover/movie?${query}&language=en-US${voteCountQuery}`
  );
}

function getTvShows(query: string) {
  const voteCountQuery = query.includes("vote_count.gte")
    ? ""
    : "&vote_count.gte=20";

  return apiWrapper<Response<TvShow>>(
    `/discover/tv?${query}&language=en-US${voteCountQuery}`
  );
}

function getMovieDetails(id = "") {
  return apiWrapper<MovieDetails>(
    `/movie/${id}?append_to_response=credits,videos,images`
  );
}

function getTvDetails(id = "") {
  return apiWrapper<TvDetails>(
    `/tv/${id}?append_to_response=credits,videos,images`
  );
}

function getPersonDetails(id = "") {
  return apiWrapper<Person>(
    `/person/${id}?append_to_response=external_ids,combined_credits`
  );
}

function getSearchResults(query: string) {
  return apiWrapper<Response<SearchResult>>(
    `/search/multi?include_adult=false&language=en-US&page=1&query=${query}`
  );
}

function getGenres(mediaType: "tv" | "movie") {
  return apiWrapper(`/genre/${mediaType}/list?language=en-US`);
}

export const api = {
  getGenres,
  getMovieDetails,
  getMovies,
  getPersonDetails,
  getSearchResults,
  getTrendingMovies,
  getTvDetails,
  getTvShows,
};
