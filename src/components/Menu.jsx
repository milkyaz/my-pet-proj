import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="sm"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            // bgcolor: "#cfe8fc",
            backgroundImage: 'url("./public/bg-main.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 812,
            width: 375,
            borderRadius: "32px",
            border: "1px solid black",
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontSize: "30px",
              display: "flex",
              justifyContent: "space-around",
              width: "372px",
              marginTop: "194px",
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
          <Link to="/placelist" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                width: 311,
                display: "flex",
                margin: "24px 32px 48px 32px",
                padding: "14px",
                borderRadius: 16,
              }}
            >
              Смотреть
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
}

export { Menu };
