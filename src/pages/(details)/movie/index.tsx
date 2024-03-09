import { getMovieDetails } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import DetailsInfo from "../components/details-info";
import RowList from "@/components/row-list";
import PersonCard from "@/components/cards/person-card";

function MovieDetails() {
  const { id } = useParams();

  const {
    data: movie,
    error,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails(id),
    select: (data) => ({
      ...data,
      videos: data.videos.results.filter((video) => video.type === "Trailer"),
    }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isSuccess)
    return (
      <>
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
        <h2 className="mb-3 text-2xl font-semibold">Cast</h2>
        <RowList
          items={movie.credits.cast
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 15)}
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
