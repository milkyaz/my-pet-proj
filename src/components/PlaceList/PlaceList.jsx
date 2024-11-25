import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";
import data from "../../data/data";

export function PlaceList() {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(data.length);
  const filteredData = data.filter((el) =>
    el.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <TextField
        label="Поиск по названию"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "20px", marginTop: "20px" }}
      />
      <Box
        className="places__box-flex"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          height: "400px",
          overflow: "auto",
        }}
      >
        {filteredData.map((el) => (
          <Box
            key={el.id}
            sx={{
              marginBottom: "90px",
            }}
          >
            <Link
              to={`/place/${el.id}`}
              style={{
                textDecoration: "none",
                width: "140px",
                height: "140px",
              }}
            >
              <Box
                sx={{
                  width: "140px",
                  height: "140px",
                }}
              >
                <img
                  src={el.image}
                  alt={el.name}
                  style={{
                    width: "140px",
                    height: "140px",
                    borderRadius: 20,
                  }}
                />

                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    marginTop: "10px",
                    color: "black",
                    lineHeight: 1,
                    textAlign: "center",
                  }}
                >
                  {el.name}
                </Typography>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>

      <Box className="place__counter">
        <Typography
          variant="h6"
          gutterBottom
          style={{
            marginTop: "41px",
            color: "black",
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          Количество
          <br />
          достопримечательностей
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginTop: "20px",
              color: "black",
              lineHeight: 1,
              textAlign: "center",
              padding: "5px",
              width: "40px",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            {data.length}
          </Typography>
        </Box>
      </Box>

      <Box
        className="button"
        sx={{ paddingTop: "0px", display: "flex", justifyContent: "center" }}
      >
        <Link to="/my-pet-proj/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              width: 311,
              padding: "14px",
              borderRadius: 16,
            }}
          >
            Назад на главную страницу
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
