import { useParams, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BasicModal } from "../BasicModal.jsx/BasicModal";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import data from "../../data/data";
import "./index.css";

const IMAGES = {
  image1: new URL("./img/star.png", import.meta.url).href,
};
export function PlaceDetail() {
  const { id } = useParams();
  const place = data.find((el) => el.id === parseInt(id));

  if (!place) {
    return <div>Достопримечательность не найдена</div>;
  }

  return (
    <Box
      sx={{
        width: "100%",
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
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: "5px" }}>
            <img src={IMAGES.image1} alt="" />
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                marginBottom: 0,
                color: "black",
                display: "flex",
                flexDirection: "column",
                lineHeight: 1,
                width: "160px",
                fontWeight: 500,
                fontSize: "medium",
              }}
            >
              {place.name}
            </Typography>
          </Box>{" "}
          <Link
            to={place.location}
            target="_blank"
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
      </Box>
      <Typography
        style={{
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 12,
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
      <Box
        sx={{
          display: "flex",
          height: "39vh",
          mb: "40px",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Link to="/my-pet-proj/placelist" style={{ textDecoration: "none" }}>
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
    </Box>
  );
}
