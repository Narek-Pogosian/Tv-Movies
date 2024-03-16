import { Skeleton } from "../ui/skeleton";

interface SkeletonCardProps extends React.ComponentProps<"div"> {
  isPerson?: boolean;
}

function SkeletonCard({ isPerson, ...props }: SkeletonCardProps) {
  return (
    <div {...props}>
      <Skeleton className="w-full aspect-[3/4.5]" />
      <div className="py-1">
        <Skeleton className="h-4 mt-0.5 mb-1.5" />
        {!isPerson ? (
          <div className="flex justify-between">
            <Skeleton className="w-12 h-4" />
            <Skeleton className="w-12 h-4" />
          </div>
        ) : (
          <Skeleton className="h-4" />
        )}
      </div>
    </div>
  );
}

export default SkeletonCard;
