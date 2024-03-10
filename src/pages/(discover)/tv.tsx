import { useGetInfinite } from "@/hooks/use-get-infinite";
import { getTvShows } from "@/lib/api";

function TvShows() {
  const { result } = useGetInfinite({
    queryKey: "tvShows",
    queryFn: getTvShows,
  });

  return <div>{JSON.stringify(result)}</div>;
}

export default TvShows;
