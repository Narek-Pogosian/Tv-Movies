import { ShowDescriptiveGridContext } from "@/context/show-descriptive-grid";
import { useContext } from "react";

export function useShowDescriptiveGrid() {
  const context = useContext(ShowDescriptiveGridContext);

  if (!context)
    throw new Error(
      "useTheme must be used within a ShowDescriptiveGridProvider"
    );

  return context;
}
