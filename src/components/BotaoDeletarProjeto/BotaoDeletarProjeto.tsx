import styles from "./BotaoDeletarProejto.module.css";

interface Iprops {
  texto: string;
  funcao: any;
}
const Deletar = ({ texto, funcao }: Iprops) => {
  return <button onClick={funcao}>{texto}</button>;
};

export default Deletar;
