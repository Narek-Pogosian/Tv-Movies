export interface SortOptionType {
  id: number;
  text: string;
  value: string;
}

export const sortOptions: SortOptionType[] = [
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
];
