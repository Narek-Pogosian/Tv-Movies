import { useGetInfinite } from "@/hooks/use-get-infinite";
import { getTvShows } from "@/lib/api";
import { SkeletonList, TvList } from "./components/lists";
import DiscoverLayout from "./components/discover-layout";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/loader";

function TvShows() {
  const { result, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetInfinite({
      queryKey: "tvShows",
      queryFn: getTvShows,
    });

  return (
    <DiscoverLayout>
      {isLoading ? (
        <SkeletonList />
      ) : (
        result && (
          <InfiniteScroll
            next={fetchNextPage}
            dataLength={result.length}
            hasMore={hasNextPage}
            loader={<Loader />}
            endMessage={
              result.length > 20 && (
                <p className="py-6 font-semibold text-center">
                  Yay! You have seen it all
                </p>
              )
            }
          >
            <TvList tvShows={result} />
          </InfiniteScroll>
        )
      )}
      {isError && (
        <p className="text-lg text-muted-foreground text-center py-4">
          Something went wrong. Please try again later.
        </p>
      )}
    </DiscoverLayout>
  );
}

export default TvShows;
