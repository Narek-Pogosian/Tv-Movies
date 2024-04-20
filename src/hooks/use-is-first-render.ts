import { useEffect, useRef } from "react";

export function useIsFirstRender() {
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    isFirstRenderRef.current = false;
  }, []);

  return isFirstRenderRef.current;
}
