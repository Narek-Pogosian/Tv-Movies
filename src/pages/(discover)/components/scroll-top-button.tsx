import { Button } from "@/components/ui/button";
import { ArrowBigUpDash } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollButtonVisibility = () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <>
      {showButton && (
        <Button
          variant="gradient"
          size="icon"
          onClick={scrollToTop}
          className="fixed w-14 h-14 bottom-2 left-2 max-xl:md:left-1/2 max-xl:md:-translate-x-1/2 xl:hidden rounded-full z-50"
        >
          <ArrowBigUpDash />
        </Button>
      )}
    </>
  );
};

export default ScrollTopButton;
