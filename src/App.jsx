import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Menu } from "./components/Menu";
import { PlaceDetail } from "./components/Place";
import { PlaceList } from "./components/PlaceList";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="*" element={<div>Страница не найдена</div>} />
        <Route path="/place/:id" element={<PlaceDetail />} />
        <Route path="/placelist" element={<PlaceList />} />
      </Routes>
    </Router>
  );
}

export default App;
