import TopMovies from "./components/top-movies";
import TopTvShows from "./components/top-tv-shows";
import TrendingMovies from "./components/trending-movies";

function HomePage() {
  return (
    <>
      <div className="space-y-20">
        <TrendingMovies />
        <TopMovies />
        <TopTvShows />
      </div>
    </>
  );
}

export default HomePage;
