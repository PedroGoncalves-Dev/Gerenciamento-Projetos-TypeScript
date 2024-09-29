import styles from "./botaoAdd.module.css";

interface Ibotao {
  texto: string;
}
const BotaoAdd = ({ texto }: Ibotao) => {
  return <div className={styles.Botao}>{texto}</div>;
};

export default BotaoAdd;
