import ScrollTopButton from "./scroll-top-button";

function DiscoverLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8 py-4 xl:flex-row">
      <div className="w-full xl:w-fit xl:sticky top-24 h-fit">FILTERS</div>
      {children}
      {<ScrollTopButton />}
    </div>
  );
}

export default DiscoverLayout;
