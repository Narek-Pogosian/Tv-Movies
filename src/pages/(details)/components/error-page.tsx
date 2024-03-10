import { Squirrel } from "lucide-react";

function ErrorPage() {
  return (
    <div className="pt-14 gap-8 flex flex-col items-center text-muted-foreground">
      <Squirrel className="size-60" strokeWidth={1} />
      <h1 className="text-3xl font-bold">
        Oops! Something went wrong or the resource does not exist.
      </h1>
    </div>
  );
}

export default ErrorPage;
