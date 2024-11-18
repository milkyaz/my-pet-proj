import { useParams, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BasicModal } from "./BasicModa";
import data from "../data/data";

export function PlaceDetail() {
  const { id } = useParams();
  const place = data.find((el) => el.id === parseInt(id));

  if (!place) {
    return <div>Достопримечательность не найдена</div>;
  }

  return (
    <Box
      sx={{
        height: 812,
        width: 375,
        borderRadius: "32px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 5,
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
            gap: "70px",
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
            }}
          >
            {place.name}
          </Typography>
          <Typography
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
          <Typography
            variant="p"
            gutterBottom
            style={{
              fontSize: 14,
              marginBottom: 0,
              color: "black",
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
            }}
          >
            4.5 (355 Reviews)
          </Typography>
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
          Назад на главную страницу
        </Button>
      </Link>
    </Box>
  );
}
