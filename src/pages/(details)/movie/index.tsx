import { getMovieDetails } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import DetailsInfo from "../components/details-info";
import RowList from "@/components/row-list";
import PersonCard from "@/components/cards/person-card";
import DetailsInfoSkeletonShell from "../components/details-info-skeleton-shell";
import { useScrollTop } from "@/hooks/use-scroll-top";
import ErrorPage from "../components/error-page";
import { removeDuplicates } from "@/lib/utils";

function MovieDetails() {
  useScrollTop();
  const { id } = useParams();

  const {
    data: movie,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails(id),
    select: (data) => ({
      ...data,
      videos: data.videos.results.filter((video) => video.type === "Trailer"),
      credits: {
        ...data.credits,
        cast: removeDuplicates(data.credits.cast),
      },
    }),
  });

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {isLoading ? (
        <DetailsInfoSkeletonShell />
      ) : (
        movie && (
          <DetailsInfo
            crew={movie.credits.crew}
            genres={movie.genres}
            poster={movie.poster_path}
            backdrop={movie.backdrop_path}
            overview={movie.overview}
            release={movie.release_date}
            title={movie.title}
            trailer={movie.videos[0]}
            vote={movie.vote_average}
            voteCount={movie.vote_count}
          />
        )
      )}
      <RowList
        title="Cast"
        items={movie?.credits.cast
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 15)}
        isLoading={isLoading}
        isError={!!error}
        isPerson
        render={(person) => (
          <PersonCard
            id={person.id}
            image={person.profile_path}
            name={person.name}
          />
        )}
      />
    </>
  );
}

export default MovieDetails;
