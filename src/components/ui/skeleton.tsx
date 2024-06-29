import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-md bg-white/10 relative overflow-hidden after:absolute after:w-full after:-left-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/10 dark:after:via-neutral-400/10 after:to-transparent after:duration-500 after:animate-shimmer",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
