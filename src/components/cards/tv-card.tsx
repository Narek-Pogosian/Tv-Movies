import { TvShow } from "@/lib/types";
import Card from "./card";

interface TvCardProps {
  tvShow: TvShow;
}

function TvCard({ tvShow }: TvCardProps) {
  return (
    <Card>
      <div className="relative" aria-hidden>
        <Card.Image image={tvShow.poster_path} title={tvShow.name} />
        <Card.ImageInfo
          overview={tvShow.overview}
          title={tvShow.name}
          vote={tvShow.vote_average}
          voteCount={tvShow.vote_count}
        />
      </div>
      <Card.Info>
        <Card.Title title={tvShow.name} href={`/tv/${tvShow.id}`} />
        <Card.SubInfo
          rating={tvShow.vote_average}
          releaseDate={tvShow.first_air_date}
        ></Card.SubInfo>
      </Card.Info>
    </Card>
  );
}

export default TvCard;
