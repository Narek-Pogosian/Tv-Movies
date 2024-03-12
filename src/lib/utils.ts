import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removeDuplicates<T extends { id: number }>(items: T[]): T[] {
  return items.filter(
    (value, index, array) =>
      array.findIndex((item) => item.id === value.id) === index
  );
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

export function setSearchQueries(
  values: Record<string, null | string | number | Array<number>>
) {
  const searchParams = new URLSearchParams();

  Object.entries(values).forEach(([key, value]) => {
    if (!value) {
      searchParams.delete(key);
    } else if (Array.isArray(value)) {
      if (value.length === 0) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value.join(","));
      }
    } else {
      searchParams.set(key, value.toString());
    }
  });

  return `${window.location.pathname}?${searchParams.toString()}`;
}
