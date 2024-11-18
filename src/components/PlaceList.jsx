import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import data from "../data/data";

export function PlaceList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((el) =>
    el.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="sm">
      <TextField
        label="Поиск по названию"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: 5,
        }}
      >
        {filteredData.map((el) => (
          <Link
            key={el.id}
            to={`/place/${el.id}`}
            style={{ textDecoration: "none", width: "180px", height: "240px" }}
          >
            <Box
              sx={{
                borderRadius: "32px",
                border: "1px solid black",
                padding: "20px",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                width: "180px",
                height: "240px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <img
                src={el.image}
                alt={el.name}
                style={{ height: 150, width: 150, borderRadius: 20 }}
              />
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  marginTop: "10px",
                  color: "black",
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1,
                }}
              >
                {el.name}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Container>
  );
}
