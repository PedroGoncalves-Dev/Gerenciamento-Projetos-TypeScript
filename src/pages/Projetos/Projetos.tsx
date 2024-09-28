import styles from "./Projetos.module.css";

const Projetos = () => {
  return (
    <section>
      <h2>Lista de todos os seus projetos</h2>
      <p>gerencie seus proejtos com mais facilidade...</p>
      <div className={styles.containerProjetos}>
        <div className={styles.cardProjeto}>
          <h2>NOme do Projeto...</h2>
          <div>
            <h2>Tarefas</h2>
            <p>comentarios...</p>
          </div>
        </div>

        <div className={styles.cardProjeto}>
          <h2>NOme do Projeto2...</h2>
          <div>
            <h2>Tarefas</h2>
            <p>comentarios...</p>
          </div>
        </div>

        <div className={styles.cardProjeto}>
          <h2>NOme do Projeto3...</h2>
          <div>
            <h2>Tarefas</h2>
            <p>comentarios...</p>
          </div>
        </div>

        <div className={styles.cardProjeto}>
          <h2>NOme do Projeto4...</h2>
          <div>
            <h2>Tarefas</h2>
            <p>comentarios...</p>
          </div>
        </div>

        <div className={styles.cardProjeto}>
          <h2>NOme do Projeto5...</h2>
          <div>
            <h2>Tarefas</h2>
            <p>comentarios...</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projetos;
