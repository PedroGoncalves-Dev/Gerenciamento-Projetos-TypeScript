import { useNavigate } from "react-router-dom";
import styles from "./GridProjetoUsuario.module.css";
import { api } from "../../axios/baseUrl";
import { useQuery } from "@tanstack/react-query";

interface Idados {
  sucesso: boolean;
  mensagem: string;
  dados: string | number; // 'dados' pode ser um número ou string
}

const GridProjetoUsuario = () => {
  const navigate = useNavigate();

  // Função para buscar o total de projetos
  const fetchTotalProjetos = async (): Promise<Idados> => {
    try {
      const res = await api.get<Idados>("/totalProjeto");
      return res.data; // Retorna os dados diretamente
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      // Retorne um valor padrão ou lançar o erro
      return { sucesso: false, mensagem: "Erro ao buscar dados", dados: 0 };
    }
  };

  const { data, error, isLoading } = useQuery<Idados, Error>({
    queryKey: ["totalProjeto"], // Passando a queryKey corretamente
    queryFn: fetchTotalProjetos,
    refetchOnWindowFocus: true, // Passando a função de busca
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao buscar dados</div>;

  // Verifique se 'data' é definido antes de acessar 'dados'
  return (
    <div className={styles.container}>
      <div className={styles.cardProjeto} onClick={() => navigate("/projetos")}>
        <h2>Projetos</h2>
        <div>
          <p>{data?.dados}</p> {/* Use o operador de encadeamento opcional */}
          <p>Categorias...</p>
        </div>
      </div>

      <div className={styles.cardProjeto}>
        <h2>Usuários</h2>
        <div>
          <p>Total de usuários</p>
          <p>Categorias...</p>
        </div>
      </div>
    </div>
  );
};

export default GridProjetoUsuario;
