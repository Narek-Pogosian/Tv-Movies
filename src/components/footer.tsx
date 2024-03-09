function Footer() {
  return (
    <footer>
      <div className="container py-10">
        <p className="text-center text-sm font-semibold">
          This website is powered by the{" "}
          <a
            href="https://developer.themoviedb.org/docs"
            target="_blank"
            className="underline underline-offset-2"
          >
            TMDb Api
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
