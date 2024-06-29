import { Genre, MovieCrew, Video } from "@/lib/types";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import TrailerModal from "./trailer-modal";

type Props = {
  poster: string;
  backdrop: string;
  title: string;
  vote: number;
  voteCount: number;
  release: string;
  genres: Genre[];
  overview: string;
  crew: MovieCrew[];
  trailer: Video | undefined;
};

const DetailsInfo = ({
  poster,
  backdrop,
  crew,
  genres,
  overview,
  release,
  title,
  trailer,
  vote,
  voteCount,
}: Props) => {
  const voteText = `${vote.toFixed(1)} / ${voteCount} ${
    voteCount === 1 ? "Vote" : "Votes"
  }`;

  const feauturedCrew = crew
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3);

  return (
    <DetailsInfoContainer>
      {poster ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={title}
          width={256}
          height={384}
          className="h-fit hidden md:block rounded"
        />
      ) : (
        <div className="md:grid w-[256px] h-[384px] hidden rounded bg-muted place-content-center">
          <img src="/no-image.svg" alt="" width={50} height={50} />
        </div>
      )}
      {backdrop ? (
        <img
          src={`https://image.tmdb.org/t/p/w1000_and_h450_multi_faces/${backdrop}`}
          width={1000}
          height={450}
          className="md:hidden rounded"
          alt=""
        />
      ) : (
        <div className="grid md:hidden rounded w-full aspect-[10/4.5] bg-muted place-content-center">
          <img src="/no-image.svg" alt="" width={50} height={50} />
        </div>
      )}

      <div>
        <h1>{title}</h1>
        <div className="flex gap-2 flex-wrap text-neutral-400 font-semibold text-sm mb-4">
          <span className="flex gap-1 items-center">
            <Star className="size-4 text-secondary-500 fill-current" />
            {voteText}
          </span>
          <span>•</span>
          <span>{new Date(release).toLocaleDateString()}</span>
          <span>•</span>
          <span>{genres.map((genre) => genre.name).join(", ")} </span>
        </div>

        <p className="max-w-3xl mb-2 text-sm leading-6 md:mb-4 text-balance">
          {overview}
        </p>

        <div className="mb-8">
          <h3 className="mb-2 font-semibold">Featured Crew</h3>
          <ul className="flex flex-wrap gap-6">
            {feauturedCrew.map((person, i) => (
              <li className="text-sm" key={i}>
                <Link
                  to={`/person/${person.id}`}
                  className="block hover:underline"
                >
                  {person.name}
                </Link>
                <span className="text-xs text-neutral-400">{person.job}</span>
              </li>
            ))}
          </ul>
        </div>

        {trailer && <TrailerModal trailer={trailer} />}
      </div>
    </DetailsInfoContainer>
  );
};

export default DetailsInfo;

export function DetailsInfoContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 md:gap-10 lg:gap-20 md:flex-row pb-14">
      {children}
    </div>
  );
}
