import TvCard from "@/components/cards/tv-card";
import RowList from "@/components/row-list";
import { getTvShows } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

function TopTvShows() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "20px",
  });

  const { data, isError, isLoading } = useQuery({
    queryKey: ["top-tv-shows"],
    queryFn: () => getTvShows("vote_count.gte=300&sort_by=vote_average.desc"),
    enabled: inView,
  });

  return (
    <section ref={ref}>
      <h2>Popular Tv Shows</h2>
      <RowList
        items={data?.results}
        isLoading={isLoading}
        isError={isError}
        render={(tv) => <TvCard tvShow={tv} />}
      />
    </section>
  );
}

export default TopTvShows;
