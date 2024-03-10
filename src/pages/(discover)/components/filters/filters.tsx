import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { setSearchQueries } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import MyDisclosure from "@/components/ui/disclosure";
import SortSelect from "./sort-select";
import GenresSelect from "./genres-select";
import ScoreRange from "./score-range";
import VoteRange from "./vote-range";

function Filters() {
  const isMobile = useMediaQuery("(max-width: 1280px)");
  const [searchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    sort_by: searchParams.get("sort_by") ?? "popularity.desc",
    with_genres: searchParams.get("with_genres")?.split(",").map(Number) ?? [],
    "vote_average.gte": searchParams.get("vote_average.gte") ?? 0,
    "vote_count.gte": searchParams.get("vote_count.gte") ?? 0,
  });

  function handleSortChange(value: string) {
    setFilters((prev) => ({ ...prev, sort_by: value }));
  }
  function handleGenreChange(value: number[]) {
    setFilters((prev) => ({ ...prev, with_genres: value }));
  }
  function handleScoreChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilters((prev) => ({
      ...prev,
      "vote_average.gte": e.target.value,
    }));
  }
  function handleVoteChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilters((prev) => ({
      ...prev,
      "vote_count.gte": e.target.value,
    }));
  }

  useEffect(() => {
    setFilters({
      sort_by: searchParams.get("sort_by") ?? "popularity.desc",
      with_genres:
        searchParams.get("with_genres")?.split(",").map(Number) ?? [],
      "vote_average.gte": searchParams.get("vote_average.gte") ?? 0,
      "vote_count.gte": searchParams.get("vote_count.gte") ?? 0,
    });

    window.scrollTo({ top: 0 });
  }, [searchParams]);

  return (
    <>
      <MyDisclosure buttonText="Filters" openByDefault={!isMobile}>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1 sm:gap-x-8">
          <SortSelect value={filters.sort_by} onChange={handleSortChange} />
          <GenresSelect
            value={filters.with_genres}
            onChange={handleGenreChange}
          />
          <ScoreRange
            value={filters["vote_average.gte"]}
            onChange={handleScoreChange}
          />
          <VoteRange
            value={filters["vote_count.gte"]}
            onChange={handleVoteChange}
          />
        </div>
      </MyDisclosure>
      <Button
        variant="gradient"
        asChild
        className="rounded-full w-full mt-4 text-base"
      >
        <Link to={setSearchQueries(filters)}>Search</Link>
      </Button>
    </>
  );
}

export default Filters;
