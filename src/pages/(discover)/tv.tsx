import { EmptyMessage, EndMessage, ErrorMessage } from "./components/messages";
import { SkeletonList, TvList } from "./components/lists";
import { useGetInfiniteQuery } from "@/hooks/use-get-infinite";
import { api } from "@/lib/api";
import DiscoverLayout from "./components/discover-layout";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/loader";

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
      queryFn: api.getTvShows,
    });

  if (isLoading) {
    return <SkeletonList />;
  }

  if (result.length === 0) {
    return <EmptyMessage mediaType="tv shows" />;
  }

  return (
    <InfiniteScroll
      next={fetchNextPage}
      dataLength={result.length}
      hasMore={hasNextPage}
      loader={!isError && <Loader />}
      endMessage={result.length > 20 && <EndMessage />}
    >
      <TvList tvShows={result} />
      <ErrorMessage isError={isError} />
    </InfiniteScroll>
  );
}
