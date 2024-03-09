import { Skeleton } from "../ui/skeleton";

interface SkeletonCardProps extends React.ComponentProps<"div"> {}

function SkeletonCard({ ...props }: SkeletonCardProps) {
  return (
    <div {...props}>
      <Skeleton className="w-full aspect-[3/4.5]" />
      <div className="py-2">
        <Skeleton className="w-3/4 h-4 mb-2" />
        <div className="flex gap-2">
          <Skeleton className="w-1/2 h-4" />
          <Skeleton className="w-3/4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
