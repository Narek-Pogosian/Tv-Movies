import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="pt-20 text-center ">
      <h1 className="font-bold text-8xl">404</h1>
      <h2 className="text-2xl">Page not found</h2>
      <Button asChild>
        <Link to="/" className="mt-8">
          Back to home page
        </Link>
      </Button>
    </div>
  );
}

export default NotFound;
