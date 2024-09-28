import styles from "./botaoAdd.module.css";

interface Ibotao {
  texto: string;
}
const BotaoAdd = ({ texto }: Ibotao) => {
  return <button className={styles.Botao}>{texto}</button>;
};

export default BotaoAdd;
