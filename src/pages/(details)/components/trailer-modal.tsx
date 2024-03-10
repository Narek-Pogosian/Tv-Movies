import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Video } from "@/lib/types";
import { Button } from "@/components/ui/button";

function TrailerModal({ trailer }: { trailer: Video }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="gradient">
          <img src="/play.svg" alt="" />
          <span>Play Trailer</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="px-0 overflow-hidden max-w-4xl py-10 h-[300px] sm:h-[400px] lg:h-[500px]">
        <Trailer trailer={trailer} />
      </DialogContent>
    </Dialog>
  );
}

export default TrailerModal;

function Trailer({ trailer }: { trailer: Video }) {
  return (
    <iframe
      className="z-50 w-full h-full"
      src={`https://www.youtube-nocookie.com/embed/${trailer.key}`}
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  );
}
