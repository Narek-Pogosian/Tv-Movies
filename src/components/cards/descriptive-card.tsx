import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";

interface CardProps extends React.ComponentPropsWithoutRef<"article"> {
  image: string;
  title: string;
  overview: string;
  vote: number;
  voteCount: number;
  href: string;
  backdrop: string;
}

function DescriptiveCard({
  image,
  overview,
  title,
  href,
  vote,
  voteCount,
  backdrop,
}: CardProps) {
  return (
    <article className="relative group flex flex-col sm:flex-row rounded has-[:focus-visible]:ring-2 ring-white ring-offset-2 ring-offset-neutral-900">
      <div
        className="relative sm:aspect-[3/4.5] grow-0 shrink-0 sm:w-40 block"
        aria-hidden
      >
        {image ? (
          <>
            <img
              src={"https://image.tmdb.org/t/p/w300" + image}
              alt={title}
              loading="lazy"
              className="rounded hidden sm:block aspect-[3/4.5] object-cover w-full h-full"
            />
            <img
              src={"https://image.tmdb.org/t/p/w500" + backdrop}
              alt={title}
              loading="lazy"
              className="rounded sm:hidden object-cover aspect-video w-full h-full"
            />
          </>
        ) : (
          <div className="rounded bg-muted grid w-full h-full aspect-[3/4.5] place-content-center">
            <img src="/no-image.svg" alt="" width={50} height={50} />
          </div>
        )}
      </div>
      <div className="sm:px-4 py-2 sm:py-1">
        <h3 className="text-lg font-bold mb-2">
          <Link to={href} className="after:absolute outline-none after:inset-0">
            {title}
          </Link>
        </h3>
        <div className="flex gap-4 mb-4 text-sm">
          <span className="flex items-center gap-1">
            <Star className="size-4 text-secondary-500 fill-current" />
            <span className="h-4">{(isNaN(vote) ? 0 : vote).toFixed(1)}</span>
          </span>
          <span className="h-4">{voteCount} votes</span>
        </div>
        <p className="text-neutral-400 line-clamp-5">{overview}</p>
      </div>
    </article>
  );
}

export default DescriptiveCard;

export function DescriptiveSkeletonCard() {
  return (
    <div className="flex flex-col sm:flex-row">
      <Skeleton className="sm:w-40 sm:aspect-[3/4.5] aspect-video shrink-0" />
      <div className="sm:px-4 py-2 sm:py-1 w-full">
        <Skeleton className="h-6 mb-2.5 mt-0.5 w-96" />
        <div className="flex gap-4 mb-4">
          <Skeleton className="w-12 h-5" />
          <Skeleton className="w-20 h-5" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5" />
          <Skeleton className="h-5" />
          <Skeleton className="h-5" />
          <Skeleton className="h-5" />
        </div>
      </div>
    </div>
  );
}
