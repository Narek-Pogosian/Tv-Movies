import {
  sortOptionsForTv,
  sortOptionsForMovies,
} from "@/lib/constants/sort-options";
import {
  Select,
  SelectButton,
  SelectOption,
  SelectOptions,
  SelectWrapper,
} from "@/components/ui/select";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

function SortSelect() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [value, setValue] = useState(
    searchParams.get("sort_by") ?? "popularity.desc"
  );

  const sortOptions = pathname.includes("movie")
    ? sortOptionsForMovies
    : sortOptionsForTv;

  function handleChange(val: string) {
    setValue(val);
    searchParams.set("sort_by", val);

    navigate(`${window.location.pathname}?${searchParams.toString()}`);
  }

  return (
    <SelectWrapper className="w-[220px]">
      <label htmlFor="sorting-select" className="sr-only">
        Sort by
      </label>
      <Select value={value} onChange={handleChange}>
        <SelectButton id="sorting-select">
          {sortOptions.find((option) => option.value === value)?.text}
        </SelectButton>
        <SelectOptions>
          {sortOptions.map((option) => (
            <SelectOption key={option.value} value={option.value}>
              {option.text}
            </SelectOption>
          ))}
        </SelectOptions>
      </Select>
    </SelectWrapper>
  );
}

export default SortSelect;
