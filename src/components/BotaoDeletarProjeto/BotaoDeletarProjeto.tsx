import styles from "./BotaoDeletarProejto.module.css";

interface Iprops {
  texto: string;
  funcao: () => void;
}
const Deletar = ({ texto, funcao }: Iprops) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation(); //impede que o click no botao se propague pra fora dle
    funcao();
  };

  return (
    <button className={styles.botaoDeletar} onClick={handleClick}>
      {texto}
    </button>
  );
};

export default Deletar;
