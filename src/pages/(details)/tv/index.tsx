import { useScrollTop } from "@/hooks/use-scroll-top";
import { getTvDetails } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import DetailsInfoSkeletonShell from "../components/details-info-skeleton-shell";
import DetailsInfo from "../components/details-info";
import RowList from "@/components/row-list";
import PersonCard from "@/components/cards/person-card";
import ErrorPage from "../components/error-page";

function TvShowDetails() {
  useScrollTop();
  const { id } = useParams();

  const {
    data: tvShow,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["tv", id],
    queryFn: () => getTvDetails(id),
    select: (data) => ({
      ...data,
      videos: data.videos.results.filter((video) => video.type === "Trailer"),
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
        tvShow && (
          <DetailsInfo
            crew={tvShow.credits.crew}
            genres={tvShow.genres}
            poster={tvShow.poster_path}
            backdrop={tvShow.backdrop_path}
            overview={tvShow.overview}
            release={tvShow.first_air_date}
            title={tvShow.name}
            trailer={tvShow.videos[0]}
            vote={tvShow.vote_average}
            voteCount={tvShow.vote_count}
          />
        )
      )}
      <RowList
        title="Cast"
        items={tvShow?.credits.cast
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

export default TvShowDetails;
