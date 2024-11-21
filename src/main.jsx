import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container
      className="container__App"
      style={{
        display: "flex",
        justifyContent: "center",
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <CssBaseline />
      <App />
    </Container>
  </StrictMode>
);
