import MovieCard from "@/components/cards/movie-card";
import SkeletonCard from "@/components/cards/skeleton-card";
import TvCard from "@/components/cards/tv-card";
import { Movie, TvShow } from "@/lib/types";

function List<T extends { id: number }>({
  items,
  render,
}: {
  items: T[];
  render: (item: T) => React.ReactNode;
}) {
  return (
    <ul className="grid gap-8 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item, index) => (
        <li key={item.id + index}>{render(item)}</li>
      ))}
    </ul>
  );
}

export function SkeletonList() {
  return (
    <ul className="grid gap-8 w-full xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {[...Array(20)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </ul>
  );
}

export function MoviesList({ movies }: { movies: Movie[] }) {
  return (
    <List items={movies} render={(movie) => <MovieCard movie={movie} />} />
  );
}

export function TvList({ tvShows }: { tvShows: TvShow[] }) {
  return <List items={tvShows} render={(tv) => <TvCard tvShow={tv} />} />;
}
