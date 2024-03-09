import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @param items Array of items with popularity and poster_path
 * @param minimumPopularity Will filter out any items with popularity below, default is 2
 * @returns Sorted and filtered array of items
 */
export function sortAndFilterByPopularity<
  T extends { poster_path: string; popularity: number }
>(items: T[], minimumPopularity: number = 5): T[] {
  return items
    .filter(
      (item) => item.poster_path !== null && item.popularity > minimumPopularity
    )
    .sort((a, b) => b.popularity - a.popularity);
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
