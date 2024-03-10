import {
  Select,
  SelectButton,
  SelectOption,
  SelectOptions,
  SelectWrapper,
} from "@/components/ui/select";
import { sortOptions } from "@/lib/constants/sort-options";

interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

function SortSelect({ value, onChange }: SortSelectProps) {
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
