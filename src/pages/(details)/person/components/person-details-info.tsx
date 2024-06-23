import { Person } from "@/lib/types";
import Biography from "./biography";

interface PersonDetailsInfoProps {
  person: Person;
}

function PersonDetailsInfo({ person }: PersonDetailsInfoProps) {
  return (
    <PersonDetailsContainer>
      <div className="flex-shrink-0 mx-auto sm:mx-0">
        {person.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`}
            alt=""
            width={256}
            height={384}
            className="h-fit rounded"
          />
        ) : (
          <div className="md:grid w-[256px] h-[384px] hidden rounded bg-muted place-content-center">
            <img src="/no-image.svg" alt="" width={50} height={50} />
          </div>
        )}
      </div>
      <div className="w-full">
        <h1 className="mb-3 text-3xl font-semibold">{person.name}</h1>
        <div className="flex flex-wrap gap-6 mb-6">
          <div>
            <h5 className="font-semibold">Known For</h5>
            <span className="text-sm text-muted-foreground">
              {person.known_for_department}
            </span>
          </div>
          <div>
            <h5 className="font-semibold">Birthday</h5>
            <span className="text-sm text-muted-foreground">
              {new Date(person.birthday).toLocaleDateString()}
            </span>
          </div>
          <div>
            <h5 className="font-semibold">Place of Birth</h5>
            <span className="text-sm text-muted-foreground">
              {person.place_of_birth}
            </span>
          </div>
        </div>
        <Biography biography={person.biography} />
      </div>
    </PersonDetailsContainer>
  );
}

export default PersonDetailsInfo;

export function PersonDetailsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6 lg:gap-20 sm:pt-10 sm:flex-row pb-14 w-full">
      {children}
    </div>
  );
}
