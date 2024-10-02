import ModalAddProjeto from "@/components/Modal/ModalAddProjeto";
import GridProjetoUsuario from "../../components/gridProjetoUsuario/GridProjetoUsuario";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <section>
      <h1 className="#334155">pesquisa...</h1>

      <GridProjetoUsuario />
    </section>
  );
};

export default Home;
