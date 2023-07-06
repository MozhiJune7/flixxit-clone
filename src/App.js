import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Player from "./pages/Player";
import TvShows from "./pages/TvShow";
import Flixxit from "./pages/Flixxit";
import MoviePage from "./pages/MoviePage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TvShows />} />
        <Route exact path="/" element={<Flixxit />} />
        <Route exact path="/movie" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
