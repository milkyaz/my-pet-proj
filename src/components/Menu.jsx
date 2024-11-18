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
      <Container maxWidth="sm">
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontSize: 93,
              display: "flex",
              justifyContent: "space-around",
              paddingTop: 93,
            }}
          >
            Aspen
          </Typography>
          <Box
            style={{
              width: 300,
              marginTop: 334,
              marginLeft: 32,
              marginRight: 43,
            }}
          >
            {/* <img src="./public/bg-main.png" alt="" /> */}
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{
                fontSize: 22,
                marginBottom: 0,
                color: "white",
              }}
            >
              Plan your
            </Typography>
            <Typography variant="h3" gutterBottom style={{ color: "white" }}>
              Luxurious
              <br />
              Vacation
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
              Contained
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
}

export { Menu };
