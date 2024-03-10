import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";

type Props = { biography: string };

const Biography = ({ biography }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const [truncated, setTruncated] = useState(true);

  return (
    <p
      className={`text-sm leading-6 relative max-w-2xl ${
        truncated ? "line-clamp-5" : ""
      }`}
    >
      {biography}

      {truncated &&
        (isDesktop ? biography.length > 550 : biography.length > 200) && (
          <button
            className="absolute bottom-0 right-0 pl-20 bg-gradient-to-r from-background/50 via-background to-background text-secondary hover:underline"
            onClick={() => setTruncated(false)}
          >
            read more
          </button>
        )}
    </p>
  );
};

export default Biography;
