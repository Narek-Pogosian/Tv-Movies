import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/home";

function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-1 container py-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
