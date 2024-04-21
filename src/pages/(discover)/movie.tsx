import { EmptyMessage, EndMessage, ErrorMessage } from "./components/messages";
import { MoviesList, SkeletonList } from "./components/lists";
import { useGetInfiniteQuery } from "@/hooks/use-get-infinite";
import { getMovies } from "@/lib/api";
import DiscoverLayout from "./components/discover-layout";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/loader";

function Movies() {
  return (
    <DiscoverLayout>
      <MoviesContent />
    </DiscoverLayout>
  );
}

export default Movies;

function MoviesContent() {
  const { result, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetInfiniteQuery({
      queryKey: "movies",
      queryFn: getMovies,
    });

  if (isLoading) {
    return <SkeletonList />;
  }

  if (result.length === 0) {
    return <EmptyMessage mediaType="movies" />;
  }

  return (
    <InfiniteScroll
      next={fetchNextPage}
      dataLength={result.length}
      hasMore={hasNextPage}
      loader={!isError && <Loader />}
      endMessage={result.length > 20 && <EndMessage />}
    >
      <MoviesList movies={result} />
      <ErrorMessage isError={isError} />
    </InfiniteScroll>
  );
}
