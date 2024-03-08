import { Movie } from "@/lib/types";
import Card from "./card";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card>
      <Card.Image
        href={`/movie/${movie.id}`}
        image={movie.poster_path}
        title={movie.title}
      />
      <Card.Info>
        <Card.Title href={`/movie/${movie.id}`} title={movie.title} />
        <Card.SubInfo
          rating={movie.vote_average}
          releaseDate={movie.release_date}
        ></Card.SubInfo>
      </Card.Info>
    </Card>
  );
}

export default MovieCard;
