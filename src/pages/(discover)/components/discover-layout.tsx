import Filters from "./filters/filters";
import ScrollTopButton from "./scroll-top-button";

type DiscoverLayoutProps = {
  children: React.ReactNode;
};

function DiscoverLayout({ children }: DiscoverLayoutProps) {
  return (
    <div className="flex flex-col gap-8 py-4 xl:flex-row">
      <div className="w-full xl:w-fit xl:sticky top-20 h-fit">
        <Filters />
      </div>
      {children}
      {<ScrollTopButton />}
    </div>
  );
}

export default DiscoverLayout;
