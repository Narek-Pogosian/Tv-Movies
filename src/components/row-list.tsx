import { cn } from "@/lib/utils";
import { useState } from "react";
import SkeletonCard from "./cards/skeleton-card";

interface RowListProps<T> {
  items: T[] | undefined;
  render: (item: T) => React.ReactNode;
  isLoading?: boolean;
}

function RowList<T extends { id: number }>({
  items,
  render,
  isLoading,
}: RowListProps<T>) {
  return (
    <>
      <SideScrollList>
        {isLoading
          ? new Array(10)
              .fill(0)
              .map((_, i) => (
                <SkeletonCard key={i} className="flex-shrink-0 w-48" />
              ))
          : items?.map((item) => (
              <li
                key={item.id}
                className="flex-shrink-0 w-48 max-md:snap-center"
              >
                {render(item)}
              </li>
            ))}
      </SideScrollList>
    </>
  );
}

export default RowList;

// TODO: Optimize this function with a debounce or throttle. Maybe change to event listener.
function SideScrollList({ children }: { children: React.ReactNode }) {
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScroll = (e: any) => {
    const { scrollWidth, scrollLeft, clientWidth } = e.target;

    // Check if we are almost at the end of the scroll
    setIsEnd(scrollWidth - scrollLeft < clientWidth + 10);
    // Check if we are at the start of the scroll
    setIsStart(scrollLeft < 10);
  };

  return (
    <div className="relative">
      <ul
        className="gap-5 flex pb-2 overflow-x-scroll max-md:snap-x"
        onScroll={(e) => handleScroll(e)}
      >
        <div
          className={cn(
            "dark:md:w-28 opacity-0 transition-opacity duration-500 w-16 bg-gradient-to-r to-transparent from-background h-[calc(100%-17px)] absolute top-0 left-0 z-10 pointer-events-none",
            { "opacity-100": !isStart }
          )}
        />
        {children}
        <div
          className={cn(
            "dark:md:w-28 opacity-0 transition-opacity duration-500 w-16 bg-gradient-to-r from-transparent to-background h-[calc(100%-17px)] absolute top-0 right-0 z-10 pointer-events-none",
            {
              "opacity-100": !isEnd,
            }
          )}
        />
      </ul>
    </div>
  );
}
