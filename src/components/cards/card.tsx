import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CardProps extends React.ComponentPropsWithoutRef<"article"> {}

function Card({ children, ...rest }: CardProps) {
  return (
    <article
      className="relative group rounded has-[:focus-visible]:ring-2 ring-ring ring-offset-2 ring-offset-background"
      {...rest}
    >
      {children}
    </article>
  );
}

Card.Image = CardImage;
Card.Info = CardInfo;
Card.Title = CardTitle;
Card.SubInfo = CardSubInfo;
Card.ImageInfo = CardImageInfo;

export default Card;

function CardImage({ image, title }: { image?: string; title: string }) {
  return (
    <div className="relative aspect-[3/4.5] block" aria-hidden>
      {image ? (
        <img
          src={"https://image.tmdb.org/t/p/w300" + image}
          alt={title}
          loading="lazy"
          className="rounded aspect-[3/4.5] object-cover w-full h-full"
        />
      ) : (
        <div className="rounded bg-muted grid w-full h-full aspect-[3/4.5] place-content-center">
          <img src="/no-image.svg" alt="" width={50} height={50} />
        </div>
      )}
    </div>
  );
}

function CardImageInfo({
  overview,
  vote,
  voteCount,
  title,
}: {
  overview: string;
  vote: number;
  voteCount: number;
  title: string;
}) {
  return (
    <div className="absolute inset-0 hidden bg-black/70 text-white backdrop-blur-md group-hover:block rounded animate-fadeIn p-4">
      <p className="font-bold mb-1.5 line-clamp-2">{title}</p>
      <div className="flex gap-4 mb-4 text-sm">
        <span className="flex items-center gap-1">
          <Star className="size-4 text-amber-500 fill-current" />
          <span className="h-4">{(isNaN(vote) ? 0 : vote).toFixed(1)}</span>
        </span>
        <span className="h-4">{voteCount} votes</span>
      </div>
      <p className="line-clamp-[8] text-sm text-neutral-300">{overview}</p>
    </div>
  );
}

function CardInfo({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-1 pt-2 flex flex-col font-semibold text-sm">
      {children}
    </div>
  );
}

function CardTitle({ title, href }: { title: string; href: string }) {
  return (
    <h3 className="truncate mb-1">
      <Link to={href} className="after:absolute outline-none after:inset-0">
        {title}
      </Link>
    </h3>
  );
}

function CardSubInfo({
  rating,
  releaseDate,
}: {
  rating: number;
  releaseDate: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="flex items-center gap-1">
        <Star className="size-4 text-amber-500 fill-current" />
        <span className="h-4">{(isNaN(rating) ? 0 : rating).toFixed(1)}</span>
      </span>
      <span className="h-4 text-muted-foreground">
        {new Date(releaseDate).getFullYear()}
      </span>
    </div>
  );
}
