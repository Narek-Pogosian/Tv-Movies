import Filters from "./filters/filters";
import ScrollTopButton from "./scroll-top-button";

type DiscoverLayoutProps = {
  children: React.ReactNode;
  isError: boolean;
};

function DiscoverLayout({ children, isError }: DiscoverLayoutProps) {
  return (
    <div className="flex flex-col gap-8 py-4 xl:flex-row">
      <div className="w-full xl:w-fit xl:sticky top-20 h-fit">
        <Filters />
      </div>
      {isError ? (
        <p className="text-xl font-semibold w-full text-muted-foreground text-center py-4">
          Something went wrong. Please try again later.
        </p>
      ) : (
        children
      )}
      {<ScrollTopButton />}
    </div>
  );
}

export default DiscoverLayout;
