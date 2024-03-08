import MovieCard from "@/components/cards/movie-card";
import RowList from "@/components/row-list";
import { getTrendingMovies } from "@/lib/api";
import { TimeWindow } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function TrendingMovies() {
  const [timeWindow, setTimeWindow] = useState<TimeWindow>("day");

  const { data, error, isLoading } = useQuery({
    queryKey: ["trending-movies" + timeWindow],
    queryFn: () => getTrendingMovies(timeWindow),
    refetchOnWindowFocus: true,
  });

  if (error) {
    return <div>Error</div>;
  }

  // TODO: Better error message

  return (
    <>
      <h2>Trending Movies</h2>
      <div>
        <button onClick={() => setTimeWindow("day")}>Today</button>
        <button onClick={() => setTimeWindow("week")}>This Week</button>
      </div>
      <RowList
        key={timeWindow}
        items={data?.results}
        isLoading={isLoading}
        render={(movie) => <MovieCard movie={movie} />}
      />
    </>
  );
}

export default TrendingMovies;
