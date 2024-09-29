import ModalAddProjeto from "@/components/Modal/ModalAddProjeto";
import GridProjetoUsuario from "../../components/gridProjetoUsuario/GridProjetoUsuario";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section>
      <h1 className="#334155">pesquisa...</h1>

      <GridProjetoUsuario />
      <h3>mais conteudos a colocar</h3>
    </section>
  );
};

export default Home;
