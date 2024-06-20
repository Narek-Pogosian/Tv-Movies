import MovieCard from "@/components/cards/movie-card";
import RowList from "@/components/row-list";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

function TopMovies() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "20px",
  });

  const { data, isError, isLoading } = useQuery({
    queryKey: ["top-movies"],
    queryFn: () =>
      api.getMovies("vote_count.gte=300&sort_by=vote_average.desc"),
    enabled: inView,
  });

  return (
    <section ref={ref} aria-labelledby="popular-movies">
      <h2 id="popular-movies">Popular Movies</h2>
      <RowList
        items={data?.results}
        isLoading={isLoading}
        isError={isError}
        render={(movie) => <MovieCard movie={movie} />}
      />
    </section>
  );
}

export default TopMovies;
