// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagPrincipal from "./pages/PagPrincipal";
import PagEditar from "./pages/PagEditar";
import PagDetalhe from "./pages/PagDetalhe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagPrincipal />} />
        <Route path="/usuarios/:id" element={<PagDetalhe />} />
        <Route path="/usuarios/:id/editar" element={<PagEditar />} />
        <Route path="/usuarios/novo" element={<PagEditar />} />
      </Routes>
    </Router>
  );
}

export default App