import { getPersonDetails } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function PersonDetails() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["person", id],
    queryFn: () => getPersonDetails(id),
  });

  console.log(data);
  return <div>PersonDetails</div>;
}

export default PersonDetails;
