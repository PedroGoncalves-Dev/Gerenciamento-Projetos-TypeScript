import { useNavigate } from "react-router-dom";
import styles from "./GridProjetoUsuario.module.css";

const GridProjetoUsuario = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.cardProjeto} onClick={() => navigate("/projetos")}>
        <h2>Projetos</h2>
        <div>
          <p>Total de projetos</p>
          <p>cadegorias...</p>
        </div>
      </div>

      <div className={styles.cardProjeto}>
        <h2>Usuarios</h2>
        <div>
          <p>Total de usuarios</p>
          <p>cadegorias...</p>
        </div>
      </div>
    </div>
  );
};
export default GridProjetoUsuario;
