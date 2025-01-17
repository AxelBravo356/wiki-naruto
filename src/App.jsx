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
          <Route path="/" element={<Navigate to="/characters" />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/character/:id" element={<UserDetail />} />
          <Route path="/clan" element={<ClanPage />} />
          <Route path="/clan-detail/:id" element={<ClanDetail />} />
          <Route path="/akatsuki" element={<AkatsukiPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
