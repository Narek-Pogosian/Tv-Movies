import { cn } from "@/lib/utils";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";
import SkeletonCard from "./cards/skeleton-card";

interface RowListProps<T> {
  items: T[] | undefined;
  render: (item: T) => React.ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  isPerson?: boolean;
  title?: string;
}

function RowList<T extends { id: number }>({
  items,
  render,
  isLoading,
  isError,
  title,
  isPerson,
}: RowListProps<T>) {
  if (isLoading) {
    return (
      <>
        {title && <Skeleton className="lg:h-8 h-7 mb-2 w-36" />}
        <SideScrollList>
          {new Array(10).fill(0).map((_, i) => (
            <SkeletonCard
              key={i}
              className="flex-shrink-0 w-48"
              isPerson={isPerson}
            />
          ))}
        </SideScrollList>
      </>
    );
  }

  if (isError) {
    return (
      <>
        {title && <h2>{title}</h2>}
        <ScrollListContainer>
          <p className="pt-10 font-semibold">Error</p>
        </ScrollListContainer>
      </>
    );
  }

  if (items?.length === 0) {
    return (
      <>
        {title && <h2>{title}</h2>}
        <ScrollListContainer>
          <p className="pt-10 font-semibold">Nothing to see here</p>
        </ScrollListContainer>
      </>
    );
  }

  return (
    <>
      {title && <h2>{title}</h2>}
      <SideScrollList>
        {items?.map((item) => (
          <li key={item.id} className="flex-shrink-0 w-48 max-md:snap-center">
            {render(item)}
          </li>
        ))}
      </SideScrollList>
    </>
  );
}

export default RowList;

function ScrollListContainer({ children }: { children: React.ReactNode }) {
  return <div className="relative h-[352px] md:h-[368px]">{children}</div>;
}

function SideScrollList({ children }: { children: React.ReactNode }) {
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScroll = (e: any) => {
    const { scrollWidth, scrollLeft, clientWidth } = e.target;

    setIsAtEnd(scrollWidth - scrollLeft < clientWidth + 10);
    setIsAtStart(scrollLeft < 10);
  };

  return (
    <ScrollListContainer>
      <ul
        className="gap-4 flex pb-2 pt-1 px-1 overflow-x-scroll max-md:snap-x scrollbar"
        onScroll={(e) => handleScroll(e)}
      >
        <div
          className={cn(
            "dark:md:w-28 opacity-100 transition-opacity duration-500 w-16 bg-gradient-to-r to-transparent from-background h-[calc(100%-22px)] absolute top-0 -left-1 z-10 pointer-events-none",
            { "opacity-0": isAtStart }
          )}
        />
        {children}
        <div
          className={cn(
            "dark:md:w-28 opacity-100 transition-opacity duration-500 w-16 bg-gradient-to-r from-transparent to-background h-[calc(100%-22px)] absolute top-0 -right-1 z-10 pointer-events-none",
            {
              "opacity-0": isAtEnd,
            }
          )}
        />
      </ul>
    </ScrollListContainer>
  );
}
