import { Link } from "react-router-dom";
import ThemeToggle from "./theme-toggle";

function Header() {
  return (
    <header className="sticky inset-0 bg-background z-[999]">
      <div className="container flex justify-between items-center py-2.5">
        <nav className="flex gap-4 sm:gap-8 items-center">
          <Link to="/" className="text-xl font-bold uppercase">
            TV & Movies
          </Link>
          <ul className="flex gap-2 sm:gap-4">
            <li>
              <Link
                to="/movie"
                className="font-semibold text-sm hover:underline hover:underline-offset-2"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                to="/tv"
                className="font-semibold text-sm hover:underline hover:underline-offset-2"
              >
                Tv
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
