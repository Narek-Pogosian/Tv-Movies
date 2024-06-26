import { useShowDescriptiveGrid } from "@/hooks/use-show-descriptive-grid-context";
import Filters from "./filters/filters";
import ScrollTopButton from "./scroll-top-button";
import { Grid } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

type DiscoverLayoutProps = {
  children: React.ReactNode;
};

function DiscoverLayout({ children }: DiscoverLayoutProps) {
  const { toggleDescriptiveGrid, showDescriptiveGrid } =
    useShowDescriptiveGrid();

  return (
    <div className="flex flex-col gap-8 py-4 xl:flex-row">
      <div className="w-full xl:w-fit xl:sticky top-20 h-fit">
        <Filters />
      </div>
      <div className="w-full">
        <Toggle
          aria-label="Toggle grid"
          pressed={!showDescriptiveGrid}
          onPressedChange={toggleDescriptiveGrid}
          variant="outline"
          className="mb-4"
        >
          <Grid />
        </Toggle>
        {children}
      </div>
      {<ScrollTopButton />}
    </div>
  );
}

export default DiscoverLayout;
