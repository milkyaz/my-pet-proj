import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./index.css";

function Menu() {
  return (
    <>
      <CssBaseline />

      <Box
        className="menu__box"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          backgroundImage: 'url("./public/bg-main.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h2"
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "130px",
          }}
        >
          Достопримечательности
        </Typography>

        <Box
          style={{
            width: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            marginTop: "352px",
            paddingLeft: "20px",
          }}
        >
          {/* <img src="./public/bg-main.png" alt="" /> */}

          <Typography variant="h3" gutterBottom style={{ color: "white" }}>
            город
            <br />
            Астрахань
          </Typography>
        </Box>
        <Box
          className="menu__button"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Link to="/placelist" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                width: 311,
                padding: "14px",
                borderRadius: 16,
              }}
            >
              Смотреть
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export { Menu };
