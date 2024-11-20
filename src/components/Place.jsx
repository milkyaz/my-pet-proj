import { useParams, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BasicModal } from "./BasicModa";
import Container from "@mui/material/Container";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import data from "../data/data";

export function PlaceDetail() {
  const { id } = useParams();
  const place = data.find((el) => el.id === parseInt(id));

  if (!place) {
    return <div>Достопримечательность не найдена</div>;
  }

  return (
    <Container
      maxWidth="sm"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          height: 812,
          width: 375,
          borderRadius: "32px",
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Box
          className="header__img-place"
          sx={{
            marginTop: "20px",
          }}
        >
          <img
            src={place.image}
            alt={place.name}
            style={{ height: 340, width: 335, borderRadius: 20 }}
          />
        </Box>
        <Box className="name__place-title">
          <Box
            sx={{
              width: "335px",
              display: "flex",
              marginTop: "30px",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              style={{
                marginBottom: 0,
                color: "black",
                display: "flex",
                flexDirection: "column",
                lineHeight: 1,
                width: "160px",
              }}
            >
              {place.name}
            </Typography>

            <Link
              to={place.location}
              style={{ textDecoration: "none", paddingLeft: "58px" }}
            >
              <Typography
                className="text__link"
                variant="p"
                gutterBottom
                style={{
                  marginBottom: 0,
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "rgb(23, 111, 242)",
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1,
                }}
              >
                {" "}
                Показать на карте
              </Typography>
            </Link>
            <FmdGoodIcon style={{ color: "rgb(23, 111, 242)" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              gap: "1px",
              marginTop: "10px",
            }}
          >
            <img src="./star.png" alt="" />
          </Box>
        </Box>
        <Typography
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            lineClamp: 2,
            WebkitBoxOrient: "vertical",
            marginTop: "20px",
            fontSize: "14px",
          }}
          variant="p"
        >
          {place.description}
        </Typography>
        <BasicModal description={place.description} name={place.name} />
        <Link to="/placelist" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              width: 311,
              display: "flex",
              margin: "102px 32px 0px",
              padding: "14px",
              borderRadius: 16,
            }}
          >
            Назад к списку
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
