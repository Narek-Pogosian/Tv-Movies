import SearchBox from "./components/search-box";
import TopMovies from "./components/top-movies";
import TopTvShows from "./components/top-tv-shows";
import TrendingMovies from "./components/trending-movies";

function HomePage() {
  return (
    <>
      <div className="text-center font-bold py-6 mb-8">
        <h1 className="mb-4 text-center md:text-left">
          <span className="lg:text-5xl text-4xl font-bold primary-gradient text-transparent bg-clip-text">
            Welcome.
          </span>
          <br />
          <span className="lg:text-3xl text-xl text-balance block font-semibold lg:text-pretty">
            Millions of movies, tv shows and people to discover. Explore now.
          </span>
        </h1>
        <SearchBox />
      </div>
      <div className="space-y-20">
        <TrendingMovies />
        <TopMovies />
        <TopTvShows />
      </div>
    </>
  );
}

export default HomePage;
