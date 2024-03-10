import { Squirrel } from "lucide-react";

function EmptyMessage({ mediaType }: { mediaType: "movies" | "tv shows" }) {
  return (
    <div className="pt-14 gap-8 flex flex-col w-full items-center text-muted-foreground">
      <Squirrel className="size-48" strokeWidth={1} />
      <h1 className="text-2xl font-bold">Sorry, no {mediaType} found.</h1>
    </div>
  );
}

export default EmptyMessage;
