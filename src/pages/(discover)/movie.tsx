import { useGetInfinite } from "@/hooks/use-get-infinite";
import { getMovies } from "@/lib/api";
import DiscoverLayout from "./components/discover-layout";

function Movies() {
  const { result } = useGetInfinite({
    queryKey: "movies",
    queryFn: getMovies,
  });

  return <DiscoverLayout>{JSON.stringify(result)}</DiscoverLayout>;
}

export default Movies;
