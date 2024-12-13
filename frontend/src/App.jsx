import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./views/Home.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";
import Register from "./views/Register.jsx";
import FormPaciente from "./views/form/formPaciente.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pacientes/form" element={<FormPaciente />} />
        </Routes>
      </Container>
    </>
  );
}


export default App;