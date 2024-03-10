import { Button } from "@/components/ui/button";
import MyDisclosure from "@/components/ui/disclosure";
import { useMediaQuery } from "@/hooks/use-media-query";
import { setSearchQueries } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import SortSelect from "./sort-select";

function Filters() {
  const isMobile = useMediaQuery("(max-width: 1280px)");
  const searchParams = new URLSearchParams(location.search);

  const [filters, setFilters] = useState({
    sort_by: searchParams.get("sort_by") || "popularity.desc",
    with_genres:
      searchParams.get("with_genres")?.split(",").map(Number) || null,
  });

  function handleSortChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setFilters((prev) => ({ ...prev, sort_by: event.target.value }));
  }

  return (
    <>
      <MyDisclosure buttonText="Filters" openByDefault={!isMobile}>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1 sm:gap-x-8">
          <SortSelect value={filters.sort_by} onChange={handleSortChange} />
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
