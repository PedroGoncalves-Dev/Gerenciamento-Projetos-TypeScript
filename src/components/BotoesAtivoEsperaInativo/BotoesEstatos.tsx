import styles from "./BotoesEstatos.module.css";

const BotoesStatus = () => {
  return (
    <div className={styles.container}>
      <button className={styles.ativos}>Ativos</button>
      <button className={styles.pausados}>Pausados</button>
      <button className={styles.inativos}>Inativos</button>
    </div>
  );
};

export default BotoesStatus;
