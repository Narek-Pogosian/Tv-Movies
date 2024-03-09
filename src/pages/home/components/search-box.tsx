import { Combobox } from "@headlessui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@/hooks/use-debounce";
import { sortAndFilterByPopularity } from "@/lib/utils";
import { getSearchResults } from "@/lib/api";
import { SearchResult } from "@/lib/types";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce(query, 500);

  const { data: results } = useQuery({
    queryKey: ["search", debouncedValue],
    queryFn: () => getSearchResults(debouncedValue),
    enabled: !!debouncedValue.trim(),
    select: (data) => sortAndFilterByPopularity(data.results, 5),
  });

  const navigate = useNavigate();
  const handleSelect = (value: SearchResult) => {
    navigate(`/${value.media_type}/${value.id}`);
  };

  return (
    <Combobox as="div" className="relative z-30" onChange={handleSelect}>
      <Combobox.Input
        type="search"
        autoComplete="off"
        placeholder="Search for movie, tv show or person"
        className="w-full px-6 py-3 transition-shadow duration-300 border rounded-full outline-none focus:ring-primary focus:ring-1 bg-element"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <Combobox.Options className="absolute w-full overflow-y-scroll border -translate-x-1/2 rounded max-h-80 sm:left-0 sm:translate-x-0 left-1/2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white bg-element top-14">
        {results && results.length > 0 && query.trim()
          ? results?.map((item) => (
              <Combobox.Option
                key={item.id}
                value={item}
                className={({ active }) =>
                  `flex items-center justify-between max-w-full gap-2 px-4 py-1 ${
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
                <p className="text-sm capitalize text-grey-400">
                  {item.media_type}
                </p>
              </Combobox.Option>
            ))
          : query.trim().length > 1 &&
            results?.length === 0 && <p className="px-2 py-1">Nothing Found</p>}
      </Combobox.Options>
    </Combobox>
  );
};

export default SearchBox;
