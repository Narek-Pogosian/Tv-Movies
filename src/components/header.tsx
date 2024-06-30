import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky inset-0 bg-neutral-950 z-50">
      <div className="container flex justify-between items-center py-4">
        <nav className="flex gap-6 sm:gap-8 items-center">
          <Link
            to="/"
            className="text-xl font-extrabold uppercase primary-gradient bg-clip-text text-transparent"
          >
            <span className="hidden sm:inline">TV&Movies</span>
            <span className="inline sm:hidden">T&M</span>
          </Link>

          <ul className="flex gap-4">
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
                Tv-Shows
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
