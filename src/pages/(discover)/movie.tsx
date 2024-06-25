import { EmptyMessage, EndMessage, ErrorMessage } from "./components/messages";
import { List, SkeletonList } from "./components/lists";
import { useGetInfiniteQuery } from "@/hooks/use-get-infinite";
import { api } from "@/lib/api";
import DiscoverLayout from "./components/discover-layout";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/loader";
import MovieCard from "@/components/cards/movie-card";

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
      queryFn: api.getMovies,
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
      <List items={result} render={(movie) => <MovieCard movie={movie} />} />
      <ErrorMessage isError={isError} />
    </InfiniteScroll>
  );
}
