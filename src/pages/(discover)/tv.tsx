import { useGetInfiniteQuery } from "@/hooks/use-get-infinite";
import { getTvShows } from "@/lib/api";
import { SkeletonList, TvList } from "./components/lists";
import DiscoverLayout from "./components/discover-layout";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/loader";
import EmptyMessage from "./components/empty-message";

function TvShows() {
  return (
    <DiscoverLayout>
      <TvContent />
    </DiscoverLayout>
  );
}

export default TvShows;

function TvContent() {
  const { result, isLoading, isError, fetchNextPage, hasNextPage } =
    useGetInfiniteQuery({
      queryKey: "tvShows",
      queryFn: getTvShows,
    });

  return (
    <>
      {isLoading ? (
        <SkeletonList />
      ) : result.length === 0 ? (
        <EmptyMessage mediaType="tv shows" />
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
          <TvList tvShows={result} />
        </InfiniteScroll>
      )}
    </>
  );
}
