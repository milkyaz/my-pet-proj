import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu/Menu";
import { PlaceDetail } from "./components/Place/Place";
import { PlaceList } from "./components/PlaceList/PlaceList";
import "./App.css";

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/my-pet-proj/" element={<Menu />} />
        <Route path="*" element={<div>Страница не найдена</div>} />
        <Route path="/place/:id" element={<PlaceDetail />} />
        <Route path="/placelist" element={<PlaceList />} />
      </Routes>
    </Router>
  );
}

export default App;
