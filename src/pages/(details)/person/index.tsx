import { useScrollTop } from "@/hooks/use-scroll-top";
import { getPersonDetails } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { sortAndFilterByVoteAverage } from "@/lib/utils";
import ErrorPage from "../components/error-page";
import RowList from "@/components/row-list";
import Card from "@/components/cards/card";
import PersonDetailsInfo from "./components/person-details-info";
import PersonDetailsSkeletonShell from "./components/person-details-skeleton-shell";

function PersonDetails() {
  useScrollTop();
  const { id } = useParams();

  const {
    data: person,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["person", id],
    queryFn: () => getPersonDetails(id),
    select: (data) => {
      const selectedCredits =
        data.known_for_department === "Acting"
          ? data.combined_credits.cast
          : data.combined_credits.crew;

      return {
        ...data,
        credits: sortAndFilterByVoteAverage(selectedCredits)
          .filter(
            // Remove Duplicates
            (value, index, array) =>
              array.findIndex((item) => item.id === value.id) === index
          )
          .slice(0, 15),
      };
    },
  });

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {isLoading ? (
        <PersonDetailsSkeletonShell />
      ) : (
        person && <PersonDetailsInfo person={person} />
      )}
      <RowList
        title="Feautured in"
        items={person?.credits}
        isLoading={isLoading}
        isError={!!error}
        render={(item) => (
          <Card>
            <Card.Image
              image={item.poster_path}
              title={item.name ?? item.title ?? ""}
              href={`/${item.media_type}/${item.id}`}
            />
            <Card.Info>
              <Card.Title
                href={`/${item.media_type}/${item.id}`}
                title={item.name ?? item.title ?? ""}
              />
              <Card.SubInfo
                rating={item.vote_average}
                releaseDate={item.release_date ?? item.first_air_date ?? ""}
              ></Card.SubInfo>
            </Card.Info>
          </Card>
        )}
      />
    </>
  );
}

export default PersonDetails;
