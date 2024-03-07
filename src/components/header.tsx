import ThemeToggle from "./theme-toggle";

function Header() {
  return (
    <header>
      <div className="container flex justify-between items-center py-4">
        <nav className="flex gap-4 sm:gap-8 items-center">
          <Link href="/" className="text-xl font-bold uppercase">
            TV & Movies
          </Link>
          <ul className="flex gap-2 sm:gap-4">
            <li>
              <Link
                href="/movie"
                className="font-semibold text-sm hover:underline hover:underline-offset-2"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                href="/tv"
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
