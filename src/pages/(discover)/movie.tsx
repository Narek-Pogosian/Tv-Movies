import { MoviesList, SkeletonList } from "./components/lists";
import { useGetInfiniteQuery } from "@/hooks/use-get-infinite";
import { getMovies } from "@/lib/api";
import DiscoverLayout from "./components/discover-layout";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/loader";
import EmptyMessage from "./components/empty-message";

function Movies() {
  // TODO: Refactor and remove inifinite scroll deps,
  // Make so if isError, still show the results we have.

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
      endMessage={
        result.length > 20 && (
          <p className="py-6 font-semibold text-center">
            Yay! You have seen it all
          </p>
        )
      }
    >
      <MoviesList movies={result} />
      {isError && (
        <p className="py-6 font-semibold text-center text-red-600">
          Something went wrong, try again later.
        </p>
      )}
    </InfiniteScroll>
  );
}
