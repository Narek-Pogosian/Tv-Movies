import { MoviesList, SkeletonList } from "./components/lists";
import { useGetInfinite } from "@/hooks/use-get-infinite";
import { getMovies } from "@/lib/api";
import DiscoverLayout from "./components/discover-layout";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/loader";

function Movies() {
  const { result, isLoading, fetchNextPage, hasNextPage } = useGetInfinite({
    queryKey: "movies",
    queryFn: getMovies,
  });

  return (
    <DiscoverLayout>
      {isLoading ? (
        <SkeletonList />
      ) : (
        result && (
          <InfiniteScroll
            dataLength={result.length}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<Loader />}
          >
            <MoviesList movies={result} />
          </InfiniteScroll>
        )
      )}
    </DiscoverLayout>
  );
}

export default Movies;
