import { MoviesList, SkeletonList } from "./components/lists";
import { useGetInfinite } from "@/hooks/use-get-infinite";
import { getMovies } from "@/lib/api";
import DiscoverLayout from "./components/discover-layout";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/loader";
import EmptyMessage from "./components/empty-message";

function Movies() {
  const { result, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetInfinite({
      queryKey: "movies",
      queryFn: getMovies,
    });

  return (
    <DiscoverLayout isError={isError}>
      {isLoading ? (
        <SkeletonList />
      ) : result.length === 0 ? (
        <EmptyMessage mediaType="movies" />
      ) : (
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
        </InfiniteScroll>
      )}
    </DiscoverLayout>
  );
}

export default Movies;
