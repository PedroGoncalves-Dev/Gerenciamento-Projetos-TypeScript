import "./App.css";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import NavLateral from "./components/NavLatefal/NavLateral";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projetos from "./pages/Projetos/Projetos";
import DetalhesProjeto from "./pages/DetalhesProjeto/Detalhes";
import Login from "./pages/Login/Login";
import { ReactNode } from "react";

interface Ichidren {
  children: ReactNode;
}

function Layout({ children }: Ichidren) {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="app">
      {/* se nao estiver na pagina de login */}
      {!isLoginPage && <Cabecalho />}
      {!isLoginPage && <NavLateral />}
      <main
        style={{
          width: isLoginPage ? "100%" : "",
          height: isLoginPage ? "100vh" : "",
          backgroundImage: isLoginPage ? 'url("/task.jpg")' : "",
          backgroundSize: isLoginPage ? "cover" : "",
          backgroundPosition: isLoginPage ? "center" : "",
        }}
      >
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Gerenciamento-Projetos-TypeScript" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/detalhesProjeto" element={<DetalhesProjeto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
