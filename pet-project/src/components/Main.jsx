import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Main() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{ bgcolor: "#cfe8fc", height: 812, width: 375, borderRadius: 8 }}
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
            Астраханский биосферный заповедник
          </Typography>
          <Box
            style={{
              width: 300,
            //   marginTop: 334,
              marginLeft: 32,
              marginRight: 43,
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{
                fontSize: 22,
              }}
            >
              Plan your
            </Typography>
            <Typography variant="h3" gutterBottom>
              Luxurious
              <br />
              Vacation
            </Typography>
          </Box>
          <Button
            variant="contained"
            style={{
              width: 311,
              display: "flex",
              margin: "24px 32px 48px 32px",
            }}
          >
            Contained
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Main;
