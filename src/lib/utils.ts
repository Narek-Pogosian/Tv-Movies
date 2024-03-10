import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortAndFilterByPopularity<
  T extends { poster_path: string; popularity: number }
>(items: T[], minimumPopularity: number = 5): T[] {
  return items
    .filter(
      (item) => item.poster_path !== null && item.popularity > minimumPopularity
    )
    .sort((a, b) => b.popularity - a.popularity);
}

export function sortAndFilterByVoteAverage<
  T extends { poster_path: string; vote_average: number; vote_count: number }
>(items: T[], minimumVoteAverage: number = 2): T[] {
  return items
    .filter(
      (item) =>
        item.poster_path !== null &&
        item.vote_average > minimumVoteAverage &&
        item.vote_count > 50
    )
    .sort((a, b) => b.vote_average - a.vote_average);
}

export function objectToParamsString(params: Record<string, string>) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

export function setSearchQueries(values: Record<string, string>) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("page");

  Object.entries(values).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
  });

  return `${window.location.pathname}?${searchParams.toString()}`;
}

export function setPage(page: number) {
  const searchParams = new URLSearchParams(window.location.search);

  if (page <= 1) {
    searchParams.delete("page");
  }
  if (page > 1) {
    searchParams.set("page", page.toString());
  }

  return `${window.location.pathname}?${searchParams.toString()}`;
}
