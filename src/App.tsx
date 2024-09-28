import "./App.css";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import NavLateral from "./components/NavLatefal/NavLateral";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projetos from "./pages/Projetos/Projetos";
import DetalhesProjeto from "./pages/DetalhesProjeto/Detalhes";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Cabecalho />
        <NavLateral />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/detalhesProjeto" element={<DetalhesProjeto />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
