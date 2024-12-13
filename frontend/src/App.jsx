import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./views/Home.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";
import Register from "./views/Register.jsx";
import Header from "./views/partials/Header.jsx";
import Footer from "./views/partials/Footer.jsx";
import Login from "./views/login.jsx";
import Pacientes from "./components/pacientes.jsx";


function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/pacientes" element={<Pacientes />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;