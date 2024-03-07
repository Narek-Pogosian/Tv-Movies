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
    <Link href={href} className="relative aspect-[3/4] block">
      <img
        src={"https://image.tmdb.org/t/p/w500" + image}
        alt={title}
        width={300}
        height={400}
        loading="lazy"
        className="rounded"
      />
    </Link>
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
    <Link href={href} className="mb-0.5 truncate" title={title}>
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
    <div className="mt-auto flex justify-between items-center">
      <span>
        <span className="mr-1.5 text-amber-500 text-lg">&#9733;</span>
        <span>{rating.toFixed(1)}</span>
      </span>
      <span className="text-muted-foreground">
        {new Date(releaseDate).toLocaleDateString()}
      </span>
    </div>
  );
}
