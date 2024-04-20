import { Response } from "@/lib/types";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useIsFirstRender } from "./use-is-first-render";

interface GetInfiniteProps<T> {
  queryKey: string;
  queryFn: (queryString: string) => Promise<Response<T>>;
  initialPageParam?: number;
}

export function useGetInfiniteQuery<T>({
  queryKey,
  queryFn,
  initialPageParam = 1,
}: GetInfiniteProps<T>) {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();
  const queryClient = useQueryClient();
  const isFirstRender = useIsFirstRender();

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: [queryKey, queryString],
      queryFn: ({ pageParam }) => queryFn(`page=${pageParam}&${queryString}`),
      getNextPageParam: (lastPage) =>
        lastPage.page === lastPage.total_pages ? null : lastPage.page + 1,
      initialPageParam,
    });

  const result = data?.pages.flatMap((page) => page.results) ?? [];

  // Resets a queries error state if we revisit a page after is has errored.
  useEffect(() => {
    if (isFirstRender && isError) {
      queryClient.invalidateQueries({ queryKey: [queryKey, queryString] });
    }
  }, [isError, queryKey, queryString, queryClient, isFirstRender]);

  return { result, isLoading, isError, fetchNextPage, hasNextPage };
}
