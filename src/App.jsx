// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Modal from "@mui/material/Modal";
// import { TextField } from "@mui/material";
// import { data } from "./data/data";
import { Menu } from "./components/Menu";
import { PlaceDetail } from "./components/Place";
import { PlaceList } from "./components/PlaceList";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// function BasicModal({ description, name }) {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button
//         style={{
//           minWidth: "346px",
//           justifyContent: "flex-start",
//           fontSize: "14px",
//           fontWeight: "bold",
//           textTransform: "none",
//         }}
//         onClick={handleOpen}
//       >
//         Читать описание
//         <img src="./down.png" alt="" />
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box className="place__description" sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             {name}
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             {description}
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

// function PlaceDetail() {
//   const { id } = useParams();
//   const place = data.find((el) => el.id === parseInt(id));

//   if (!place) {
//     return <div>Достопримечательность не найдена</div>;
//   }

//   return (
//     <Box
//       sx={{
//         height: 812,
//         width: 375,
//         borderRadius: "32px",
//         border: "1px solid black",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         marginTop: 5,
//         paddingLeft: "20px",
//         paddingRight: "20px",
//       }}
//     >
//       <Box
//         className="header__img-place"
//         sx={{
//           marginTop: "20px",
//         }}
//       >
//         <img
//           src={place.image}
//           alt={place.name}
//           style={{ height: 340, width: 335, borderRadius: 20 }}
//         />
//       </Box>
//       <Box className="name__place-title">
//         <Box
//           sx={{
//             width: "335px",
//             display: "flex",
//             gap: "70px",
//             marginTop: "30px",
//           }}
//         >
//           <Typography
//             variant="h5"
//             gutterBottom
//             style={{
//               marginBottom: 0,
//               color: "black",
//               display: "flex",
//               flexDirection: "column",
//               lineHeight: 1,
//             }}
//           >
//             {place.name}
//           </Typography>
//           <Typography
//             variant="p"
//             gutterBottom
//             style={{
//               marginBottom: 0,
//               fontSize: "14px",
//               fontWeight: "bold",
//               color: "rgb(23, 111, 242)",
//               display: "flex",
//               flexDirection: "column",
//               lineHeight: 1,
//             }}
//           >
//             {" "}
//             Показать на карте
//           </Typography>
//         </Box>

//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "flex-end",
//             gap: "1px",
//             marginTop: "10px",
//           }}
//         >
//           <img src="./star.png" alt="" />
//           <Typography
//             variant="p"
//             gutterBottom
//             style={{
//               fontSize: 14,
//               marginBottom: 0,
//               color: "black",
//               display: "flex",
//               flexDirection: "column",
//               lineHeight: 1,
//             }}
//           >
//             4.5 (355 Reviews)
//           </Typography>
//         </Box>
//       </Box>
//       <Typography
//         style={{
//           overflow: "hidden",
//           display: "-webkit-box",
//           WebkitLineClamp: 4,
//           lineClamp: 2,
//           WebkitBoxOrient: "vertical",
//           marginTop: "20px",
//           fontSize: "14px",
//         }}
//         variant="p"
//       >
//         {place.description}
//       </Typography>
//       <BasicModal description={place.description} name={place.name} />
//       <Link to="/placelist" style={{ textDecoration: "none" }}>
//         <Button
//           variant="contained"
//           style={{
//             width: 311,
//             display: "flex",
//             margin: "102px 32px 0px",
//             padding: "14px",
//             borderRadius: 16,
//           }}
//         >
//           Назад на главную страницу
//         </Button>
//       </Link>
//     </Box>
//   );
// }

// function PlaceList() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredData = data.filter((el) =>
//     el.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <Container maxWidth="sm">
//       <TextField
//         label="Поиск по названию"
//         variant="outlined"
//         fullWidth
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         style={{ marginBottom: "20px" }}
//       />
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//           marginTop: 5,
//         }}
//       >
//         {filteredData.map((el) => (
//           <Link
//             key={el.id}
//             to={`/place/${el.id}`}
//             style={{ textDecoration: "none", width: "180px", height: "240px" }}
//           >
//             <Box
//               sx={{
//                 borderRadius: "32px",
//                 border: "1px solid black",
//                 padding: "20px",
//                 display: "flex",
//                 flexDirection: "row",
//                 flexWrap: "wrap",
//                 alignItems: "center",
//                 textAlign: "center",
//                 cursor: "pointer",
//                 width: "180px",
//                 height: "240px",
//                 transition: "background-color 0.3s",
//                 "&:hover": {
//                   backgroundColor: "#f0f0f0",
//                 },
//               }}
//             >
//               <img
//                 src={el.image}
//                 alt={el.name}
//                 style={{ height: 150, width: 150, borderRadius: 20 }}
//               />
//               <Typography
//                 variant="h5"
//                 gutterBottom
//                 style={{
//                   marginTop: "10px",
//                   color: "black",
//                   display: "flex",
//                   flexDirection: "column",
//                   lineHeight: 1,
//                 }}
//               >
//                 {el.name}
//               </Typography>
//             </Box>
//           </Link>
//         ))}
//       </Box>
//     </Container>
//   );
// }
function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<PlaceList />} />
        <Route path="*" element={<div>Страница не найдена</div>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
        <Route path="/placelist" element={<PlaceList />} />
      </Routes>
    </Router>
  );
}

export default App;
