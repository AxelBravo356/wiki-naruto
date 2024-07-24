import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CharactersPage } from "./pages/CharactersPage";
import { Navigation } from "./components/Navigation";
import { UserDetail } from "./components/UserDetail";
import { ClanPage } from "./pages/ClanPage";
import { ClanDetail } from "./components/ClanDetail";
import { AkatsukiPage } from "./pages/AkatsukiPage";
function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route
            path="/wiki-naruto"
            element={<Navigate to="/wiki-naruto/characters" />}
          />
          <Route path="/wiki-naruto/characters" element={<CharactersPage />} />
          <Route path="/wiki-naruto/character/:id" element={<UserDetail />} />
          <Route path="/wiki-naruto/clan" element={<ClanPage />} />
          <Route path="/wiki-naruto/clan-detail/:id" element={<ClanDetail />} />
          <Route path="/wiki-naruto/akatsuki" element={<AkatsukiPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
