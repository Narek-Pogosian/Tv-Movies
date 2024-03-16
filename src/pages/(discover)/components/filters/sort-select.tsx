import {
  Select,
  SelectButton,
  SelectOption,
  SelectOptions,
  SelectWrapper,
} from "@/components/ui/select";
import {
  sortOptionsForTv,
  sortOptionsForMovies,
} from "@/lib/constants/sort-options";
import { useLocation } from "react-router-dom";

interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

function SortSelect({ value, onChange }: SortSelectProps) {
  const { pathname } = useLocation();

  const sortOptions = pathname.includes("movie")
    ? sortOptionsForMovies
    : sortOptionsForTv;

  return (
    <SelectWrapper>
      <label htmlFor="sorting-select" className="font-semibold text-sm mb-1">
        Sort by
      </label>
      <Select value={value} onChange={onChange}>
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
