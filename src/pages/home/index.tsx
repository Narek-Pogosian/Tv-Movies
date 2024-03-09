import SearchBox from "./components/search-box";
import TopMovies from "./components/top-movies";
import TopTvShows from "./components/top-tv-shows";
import TrendingMovies from "./components/trending-movies";

function HomePage() {
  return (
    <>
      <div className="text-center font-bold py-6 mb-8">
        <h2>TODO: HERO</h2>
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
