import { useScrollTop } from "@/hooks/use-scroll-top";
import { getPersonDetails } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ErrorPage from "../components/error-page";

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
  });

  if (error) {
    return <ErrorPage />;
  }

  return <div>PersonDetails</div>;
}

export default PersonDetails;
