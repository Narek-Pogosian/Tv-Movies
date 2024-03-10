import { Response } from "@/lib/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

interface GetInfiniteProps<T> {
  queryKey: string;
  queryFn: (queryString: string) => Promise<Response<T>>;
  initialPageParam?: number;
}

export function useGetInfinite<T>({
  queryKey,
  queryFn,
  initialPageParam = 1,
}: GetInfiniteProps<T>) {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [queryKey, queryString],
    queryFn: ({ pageParam }) => queryFn(`page=${pageParam}&${queryString}`),
    getNextPageParam: (lastPage) =>
      lastPage.page === lastPage.total_pages ? null : lastPage.page + 1,
    initialPageParam,
  });

  const result = data?.pages.flatMap((page) => page.results) ?? [];

  return { result, isLoading, fetchNextPage, hasNextPage };
}
