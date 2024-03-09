import { getMovieDetails } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{JSON.stringify(data, null, 2)}</div>;
}

export default MovieDetails;
