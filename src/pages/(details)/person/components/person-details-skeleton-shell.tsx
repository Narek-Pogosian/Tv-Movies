import { Skeleton } from "@/components/ui/skeleton";
import { PersonDetailsContainer } from "./person-details-info";

function PersonDetailsSkeletonShell() {
  return (
    <PersonDetailsContainer>
      <div className="flex-shrink-0 mx-auto sm:mx-0">
        <Skeleton className="w-[256px] h-[384px]" />
      </div>
      <div className="w-full">
        <Skeleton className="h-9 mb-5 max-w-80" />

        <div className="flex gap-4 mb-8">
          <Skeleton className="h-9 w-32" />
          <Skeleton className="h-9 w-32" />
          <Skeleton className="h-9 w-32" />
        </div>

        <Skeleton className="max-w-2xl h-40 md:h-32 mb-4 md:mb-5 w-full" />
      </div>
    </PersonDetailsContainer>
  );
}

export default PersonDetailsSkeletonShell;
