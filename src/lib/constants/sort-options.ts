export type SortOptionType = {
  id: number;
  text: string;
  value: string;
}[];

export const sortOptionsForMovies = [
  {
    id: 0,
    text: "Popularity Descending",
    value: "popularity.desc",
  },
  {
    id: 1,
    text: "Popularity Ascending",
    value: "popularity.asc",
  },
  {
    id: 2,
    text: "Rating Descending",
    value: "vote_average.desc",
  },
  {
    id: 3,
    text: "Rating Ascending",
    value: "vote_average.asc",
  },
  {
    id: 4,
    text: "Release Date Descening",
    value: "release_date.desc",
  },
  {
    id: 5,
    text: "Release Date Ascending",
    value: "release_date.asc",
  },
] as const;

export const sortOptionsForTv = [
  {
    id: 0,
    text: "Popularity Descending",
    value: "popularity.desc",
  },
  {
    id: 1,
    text: "Popularity Ascending",
    value: "popularity.asc",
  },
  {
    id: 2,
    text: "Rating Descending",
    value: "vote_average.desc",
  },
  {
    id: 3,
    text: "Rating Ascending",
    value: "vote_average.asc",
  },
  {
    id: 4,
    text: "Release Date Descening",
    value: "first_air_date.desc",
  },
  {
    id: 5,
    text: "Release Date Ascending",
    value: "first_air_date.asc",
  },
] as const;
