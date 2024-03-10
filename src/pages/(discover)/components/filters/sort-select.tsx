import { sortOptions } from "@/lib/constants/sort-options";

interface SortSelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <select name="sort" id="sort" value={value} onChange={onChange}>
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}

export default SortSelect;
