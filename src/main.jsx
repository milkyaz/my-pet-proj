import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainScreen from "./components/MainScreen.jsx";
// import Place from "./components/Place.jsx";
import App from "./App.jsx";
// import { PlaceList } from "./components/Demo.jsx";
// import { PlaceDetail } from "./components/Demo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* {" "}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mainscreen" element={<MainScreen />} />
        <Route path="/places" element={<Place />} />
        <Route path="/demoplace/:id" component={PlaceDetail} />
        <Route path="/demomainscreen" component={PlaceList} />
        <Route path="/placelist" component={PlaceList} />
      </Routes>
    </BrowserRouter> */}
    <App />
  </StrictMode>
);
