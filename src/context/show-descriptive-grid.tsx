import { createContext, useState } from "react";

interface ShowDescriptiveGridContextType {
  showDescriptiveGrid: boolean;
  toggleDescriptiveGrid: () => void;
}

const initialState: ShowDescriptiveGridContextType = {
  showDescriptiveGrid:
    localStorage.getItem("showDescriptiveGrid") === "show" ? true : false,
  toggleDescriptiveGrid: () => null,
};

export const ShowDescriptiveGridContext =
  createContext<ShowDescriptiveGridContextType>(initialState);

export function ShowDescriptiveGridProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showDescriptiveGrid, setShowDescriptiveGrid] = useState(() =>
    localStorage.getItem("showDescriptiveGrid") === "show" ? true : false
  );

  function toggleDescriptiveGrid() {
    if (showDescriptiveGrid) {
      setShowDescriptiveGrid(false);
      localStorage.removeItem("showDescriptiveGrid");
    } else {
      setShowDescriptiveGrid(true);
      localStorage.setItem("showDescriptiveGrid", "show");
    }
  }

  return (
    <ShowDescriptiveGridContext.Provider
      value={{ toggleDescriptiveGrid, showDescriptiveGrid }}
    >
      {children}
    </ShowDescriptiveGridContext.Provider>
  );
}
