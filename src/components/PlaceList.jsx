import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";
import data from "../data/data";

export function PlaceList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((el) =>
    el.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          marginTop: 5,
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
            justifyContent: "space-between",
            gap: "10px",
            height: "445px",
            overflow: "auto",
          }}
        >
          {filteredData.map((el) => (
            <Link
              key={el.id}
            

              to={`/place/${el.id}`}
              style={{
                textDecoration: "none",
                width: "140px",
                height: "140px",
              }}
            >
              <Box
                sx={{
                  width: "150px",
                  height: "209px",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                    borderRadius: "14px",
                  },
                }}
              >
                <img
                  src={el.image}
                  alt={el.name}
                  style={{ height: 150, width: 150, borderRadius: 20 }}
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
                  sx={{
                    transition: "background-color 0.3s",
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "14px",
                    },
                  }}
                >
                  {el.name}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>

        <Box className="button" sx={{ paddingTop: "90px" }}>
          <Link to="/placelist" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                width: 311,
                display: "flex",
                margin: "102px 12px 0px",
                padding: "14px",
                borderRadius: 16,
              }}
            >
              Назад на главную страницу
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
