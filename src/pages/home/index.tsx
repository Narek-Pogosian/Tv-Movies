import TopMovies from "./components/top-movies";
import TopTvShows from "./components/top-tv-shows";
import TrendingMovies from "./components/trending-movies";

function HomePage() {
  return (
    <>
      <div className="text-center font-bold py-6">TODO: Hero / Searchbox</div>
      <div className="space-y-20">
        <TrendingMovies />
        <TopMovies />
        <TopTvShows />
      </div>
    </>
  );
}

export default HomePage;
