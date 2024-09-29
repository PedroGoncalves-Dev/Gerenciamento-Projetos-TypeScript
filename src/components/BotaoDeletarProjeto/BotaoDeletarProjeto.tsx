import styles from "./BotaoDeletarProejto.module.css";

interface Iprops {
  texto: string;
  funcao: () => void;
}
const Deletar = ({ texto, funcao }: Iprops) => {
  return (
    <button className={styles.botaoDeletar} onClick={funcao}>
      {texto}
    </button>
  );
};

export default Deletar;
