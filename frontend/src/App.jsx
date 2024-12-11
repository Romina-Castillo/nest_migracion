import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./views/Home.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";

// const navArrayLinks = [
//   {
//     title: "Home",
//     path: "/",
//   },
// ];

function App() {
  return (
    <Router>
      {/* <Navbar navArrayLinks={navArrayLinks} /> */}
      <ScrollToTop />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registro />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;