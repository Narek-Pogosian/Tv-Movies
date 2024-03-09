import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}

function Card({ children, ...rest }: CardProps) {
  return <div {...rest}>{children}</div>;
}

Card.Image = CardImage;
Card.Info = CardInfo;
Card.Title = CardTitle;
Card.SubInfo = CardSubInfo;

export default Card;

function CardImage({
  image,
  title,
  href,
}: {
  image: string;
  title: string;
  href: string;
}) {
  // TODO: Add a placeholder image
  return (
    <Link to={href} className="relative aspect-[3/4.5] block">
      <img
        src={"https://image.tmdb.org/t/p/w500" + image}
        alt={title}
        loading="lazy"
        className="rounded aspect-[3/4.5] object-cover w-full h-full"
      />
    </Link>
  );
}

function CardInfo({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-1 pt-1 flex flex-col font-semibold text-sm">
      {children}
    </div>
  );
}

function CardTitle({ title, href }: { title: string; href: string }) {
  return (
    <Link to={href} className="truncate mb-1" title={title}>
      {title}
    </Link>
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
        <span>{rating.toFixed(1)}</span>
      </span>
      <span className="text-muted-foreground">
        {new Date(releaseDate).getFullYear()}
      </span>
    </div>
  );
}
