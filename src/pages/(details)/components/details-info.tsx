import { Genre, MovieCrew, Video } from "@/lib/types";
import { Link } from "react-router-dom";

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
  // trailer,
  vote,
  voteCount,
}: Props) => {
  return (
    <div className="flex flex-col gap-6 md:gap-10 lg:gap-20 md:pt-10 md:flex-row pb-14">
      {poster ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={title}
          width={256}
          height={384}
          className="h-fit hidden md:block rounded"
        />
      ) : (
        <div className="md:grid w-[256px] h-[384px] hidden rounded bg-accent place-content-center">
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
        <div className="grid md:hidden rounded w-full aspect-[10/4.5] bg-accent place-content-center">
          <img src="/no-image.svg" alt="" width={50} height={50} />
        </div>
      )}

      <div>
        <h1 className="text-3xl font-semibold mb-2">{title}</h1>
        <div className="space-x-2 text-sm mb-4 divide-x-[1px] divide-muted-foreground text-muted-foreground">
          <span>
            <span className="mr-1 text-base text-secondary">&#9733;</span>
            <span>
              {`${vote.toFixed(1)} / ${voteCount} ${
                voteCount === 1 ? "Vote" : "Votes"
              }`}
            </span>
          </span>
          <span className="pl-1">
            {" "}
            {new Date(release).toLocaleDateString()}
          </span>
          <span className="pl-1">
            {" "}
            {genres.map((genre) => genre.name).join(", ")}{" "}
          </span>
        </div>

        <p className="max-w-2xl mb-4 text-sm leading-6 md:mb-8 text-balance">
          {overview}
        </p>

        <div className="mb-8">
          <h3 className="mb-2 font-semibold">Featured Crew</h3>
          <div className="flex flex-wrap gap-6">
            {crew
              .sort((a, b) => b.popularity - a.popularity)
              .slice(0, 3)
              .map((person, i) => (
                <div className="text-sm" key={i}>
                  <Link
                    to={`/person/${person.id}`}
                    className="block hover:underline"
                  >
                    {person.name}
                  </Link>
                  <span className="text-xs text-neutral-400">{person.job}</span>
                </div>
              ))}
          </div>
        </div>

        {/* {trailer && <TrailerModal trailer={trailer} />} */}
      </div>
    </div>
  );
};

export default DetailsInfo;
