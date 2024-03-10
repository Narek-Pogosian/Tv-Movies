import {
  SelectButton,
  SelectOption,
  SelectOptions,
  SelectWrapper,
} from "@/components/ui/select";
import { movieGenres } from "@/lib/constants/movie-genres";
import { tvGenres } from "@/lib/constants/tv-genres";
import { Listbox } from "@headlessui/react";
import { useLocation } from "react-router-dom";

interface GenresSelectProps {
  value: number[] | null;
  onChange: (value: number[]) => void;
}

function GenresSelect({ value, onChange }: GenresSelectProps) {
  const { pathname } = useLocation();

  const genres = pathname.includes("movie") ? movieGenres : tvGenres;

  return (
    <SelectWrapper>
      <Listbox multiple value={value} onChange={onChange}>
        <label htmlFor="genres-select" className="font-semibold text-sm mb-1">
          Select genres
        </label>
        <SelectButton id="genres-select">Genres</SelectButton>
        <SelectOptions>
          <div className="grid-cols-2 grid">
            {genres.map((genre) => (
              <SelectOption key={genre.id} value={genre.id}>
                {genre.name}
              </SelectOption>
            ))}
          </div>
        </SelectOptions>
      </Listbox>
    </SelectWrapper>
  );
}

export default GenresSelect;
