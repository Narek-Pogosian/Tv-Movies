import MovieCard from "@/components/cards/movie-card";
import RowList from "@/components/row-list";
import { api } from "@/lib/api";
import { TimeWindow } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import TrendingToggle from "./trending-toggle";

function TrendingMovies() {
  const [timeWindow, setTimeWindow] = useState<TimeWindow>("day");

  const { data, isError, isLoading } = useQuery({
    queryKey: ["trending-movies" + timeWindow],
    queryFn: () => api.getTrendingMovies(timeWindow),
    refetchOnWindowFocus: true,
  });

  return (
    <section aria-labelledby="trending">
      <div className="flex gap-4 items-center">
        <h2 id="trending">Trending</h2>
        <TrendingToggle timeWindow={timeWindow} setTimeWindow={setTimeWindow} />
      </div>
      <RowList
        key={timeWindow}
        items={data?.results}
        isLoading={isLoading}
        isError={isError}
        render={(movie) => <MovieCard movie={movie} />}
      />
    </section>
  );
}

export default TrendingMovies;
