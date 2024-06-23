import { Movie } from "@/lib/types";
import Card from "./card";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card>
      <div className="relative" aria-hidden>
        <Card.Image image={movie.poster_path} title={movie.title} />
        <Card.ImageInfo
          overview={movie.overview}
          title={movie.title}
          vote={movie.vote_average}
          voteCount={movie.vote_count}
        />
      </div>
      <Card.Info>
        <Card.Title title={movie.title} href={`/movie/${movie.id}`} />
        <Card.SubInfo
          rating={movie.vote_average}
          releaseDate={movie.release_date}
        ></Card.SubInfo>
      </Card.Info>
    </Card>
  );
}

export default MovieCard;
