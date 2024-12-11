import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./views/Home.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}


export default App;