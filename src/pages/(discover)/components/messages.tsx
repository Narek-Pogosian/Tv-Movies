import { Squirrel } from "lucide-react";

interface ErrorMessageProps {
  isError: boolean;
}

export function ErrorMessage({ isError }: ErrorMessageProps) {
  if (isError) {
    return (
      <p className="py-6 font-semibold text-center text-red-600">
        Something went wrong, try again later.
      </p>
    );
  }

  return null;
}

export function EmptyMessage({
  mediaType,
}: {
  mediaType: "movies" | "tv shows";
}) {
  return (
    <div className="pt-14 gap-8 flex flex-col w-full items-center text-neutral-400">
      <Squirrel className="size-48" strokeWidth={1} />
      <h1 className="text-2xl font-bold">Sorry, no {mediaType} found.</h1>
    </div>
  );
}

export function EndMessage() {
  return (
    <p className="py-6 font-semibold text-center">Yay! You have seen it all</p>
  );
}
