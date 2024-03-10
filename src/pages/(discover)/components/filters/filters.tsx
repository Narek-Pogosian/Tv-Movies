import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { setSearchQueries } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import MyDisclosure from "@/components/ui/disclosure";
import SortSelect from "./sort-select";
import GenresSelect from "./genres-select";

function Filters() {
  const isMobile = useMediaQuery("(max-width: 1280px)");
  const [searchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    sort_by: searchParams.get("sort_by") ?? "popularity.desc",
    with_genres: searchParams.get("with_genres")?.split(",").map(Number) ?? [],
  });

  function handleSortChange(value: string) {
    setFilters((prev) => ({ ...prev, sort_by: value }));
  }

  function handleGenreChange(value: number[]) {
    setFilters((prev) => ({ ...prev, with_genres: value }));
  }

  useEffect(() => {
    setFilters({
      sort_by: searchParams.get("sort_by") ?? "popularity.desc",
      with_genres:
        searchParams.get("with_genres")?.split(",").map(Number) ?? [],
    });
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
