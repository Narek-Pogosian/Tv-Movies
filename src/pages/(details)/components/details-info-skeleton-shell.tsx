import { Skeleton } from "@/components/ui/skeleton";
import { DetailsInfoContainer } from "./details-info";

function DetailsInfoSkeletonShell() {
  return (
    <DetailsInfoContainer>
      <Skeleton className="w-full aspect-[10/4.5] md:aspect-auto md:w-[256px] md:h-[384px] shrink-0" />

      <div className="w-full">
        <Skeleton className="h-9 mb-5 w-44" />
        <Skeleton className="h-5 mb-5 md:max-w-[50%]" />

        <Skeleton className="max-w-2xl h-52 md:h-20 mb-4 md:mb-5" />

        <Skeleton className="h-5 w-44 mb-3" />
        <div className="flex gap-4 mb-8">
          <Skeleton className="h-9 w-32" />
          <Skeleton className="h-9 w-32" />
          <Skeleton className="h-9 w-32" />
        </div>

        <Skeleton className="h-10 w-32" />
      </div>
    </DetailsInfoContainer>
  );
}

export default DetailsInfoSkeletonShell;
