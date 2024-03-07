import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SearchParams } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function objectToParamsString(params: SearchParams) {
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
