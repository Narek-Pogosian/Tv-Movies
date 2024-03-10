import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className="flex justify-center pt-10 pb-4 text-foreground">
      <Loader2 className="animate-spin size-10" />
    </div>
  );
}

export default Loader;
