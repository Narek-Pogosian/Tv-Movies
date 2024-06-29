import { useScrollTop } from "@/hooks/use-scroll-top";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { removeDuplicates, sortAndFilterByVoteAverage } from "@/lib/utils";
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
    isSuccess,
  } = useQuery({
    queryKey: ["person", id],
    queryFn: () => api.getPersonDetails(id),
    select: (data) => {
      const selectedCredits =
        data.known_for_department === "Acting"
          ? data.combined_credits.cast
          : data.combined_credits.crew;

      return {
        ...data,
        credits: removeDuplicates(
          sortAndFilterByVoteAverage(selectedCredits)
        ).slice(0, 15),
      };
    },
  });

  if (error) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return (
      <>
        <PersonDetailsSkeletonShell />
        <RowList title="p" isLoading items={[]} isPerson render={() => <></>} />
      </>
    );
  }

  if (isSuccess) {
    return (
      <>
        <PersonDetailsInfo person={person} />
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
              />
              <Card.Info>
                <Card.Title
                  title={item.name ?? item.title ?? ""}
                  href={`/${item.media_type}/${item.id}`}
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
}

export default PersonDetails;
