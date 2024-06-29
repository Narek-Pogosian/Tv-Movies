import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import NotFound from "./pages/not-found";
import MovieDetails from "./pages/(details)/movie";
import TvShowDetails from "./pages/(details)/tv";
import PersonDetails from "./pages/(details)/person";
import Movies from "./pages/(discover)/movie";
import TvShows from "./pages/(discover)/tv";

function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-1 container py-4 md:py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TvShows />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/tv/:id" element={<TvShowDetails />} />
          <Route path="/person/:id" element={<PersonDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
