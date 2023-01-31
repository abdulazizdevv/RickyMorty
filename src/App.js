import { Header } from "./components/Header/Header";
import { Character } from "./pages/Character/Character";
import { Episode } from "./pages/Episode/Episode";
import { Location } from "./pages/Location/Location";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container py-5">
        <Routes>
          <Route path="/" element={<Character />} />
          <Route path="episode" element={<Episode />} />
          <Route path="location" element={<Location />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
