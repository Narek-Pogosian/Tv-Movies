import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@/hooks/use-debounce";
import { sortAndFilterByPopularity } from "@/lib/utils";
import { getSearchResults } from "@/lib/api";
import { type SearchResult } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce(query, 500);

  const { data: results, isLoading } = useQuery({
    queryKey: ["search", debouncedValue],
    queryFn: () => getSearchResults(debouncedValue),
    enabled: !!debouncedValue.trim(),
    select: (data) => sortAndFilterByPopularity(data.results, 5),
  });

  const navigate = useNavigate();
  // TODO: Fix click outside issue.
  const handleSelect = (value: SearchResult) => {
    navigate(`/${value.media_type}/${value.id}`);
  };

  return (
    <Combobox as="div" className="relative z-30" onChange={handleSelect}>
      <Combobox.Input
        type="search"
        autoComplete="off"
        placeholder="Search for movie, tv show or person"
        className="w-full px-6 py-3 transition-shadow duration-300 font-semibold border rounded-full outline-none focus:ring-primary focus:ring-1 bg-element"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {query.trim() && (results || isLoading) && (
        <Combobox.Options
          className="absolute w-full overflow-y-auto border shadow-md dark:shadow-lg -translate-x-1/2 rounded-lg max-h-80 sm:left-0 sm:translate-x-0 left-1/2 scrollbar-thin bg-element top-14 space-y-1"
          hold={false}
        >
          {isLoading ? (
            <ComboBoxLoading />
          ) : results?.length ? (
            results?.map((item) => (
              <ComboBoxListItem item={item} key={item.id} />
            ))
          ) : (
            <ComboBoxError />
          )}
        </Combobox.Options>
      )}
    </Combobox>
  );
};

export default SearchBox;

function ComboBoxListItem({ item }: { item: SearchResult }) {
  return (
    <Combobox.Option
      key={item.id}
      value={item}
      className={({ active }) =>
        `flex items-center justify-between max-w-full gap-2 px-4 h-16 ${
          active ? "bg-black/5 dark:bg-white/5" : ""
        }`
      }
    >
      <div className="flex items-center w-4/5 gap-2">
        <img
          width={40}
          height={48}
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${
            item.poster_path ? item.poster_path : item.profile_path
          }`}
        />
        <span className="text-sm font-semibold truncate">
          {item.name ?? item.title}
        </span>
      </div>
      <p className="text-sm capitalize text-grey-400">{item.media_type}</p>
    </Combobox.Option>
  );
}

function ComboBoxError() {
  return <p className="px-2 py-4">Nothing Found</p>;
}

function ComboBoxLoading() {
  return (
    <>
      {new Array(10).fill(0).map((_, i) => (
        <Skeleton key={i} className="h-16" />
      ))}
    </>
  );
}
