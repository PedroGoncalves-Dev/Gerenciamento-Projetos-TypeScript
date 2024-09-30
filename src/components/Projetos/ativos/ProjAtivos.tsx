import { useQuery } from "@tanstack/react-query";
import styles from "./ProjAtivos.module.css";
import Deletar from "@/components/BotaoDeletarProjeto/BotaoDeletarProjeto";
import { IdadosApi } from "@/interfaces/resApi";
import { api } from "@/axios/baseUrl";
import { useNavigate } from "react-router-dom";

interface Iprops {
  attProjeto: boolean;
  inativarProjeto: () => void;
}

const ProjetosAtivos = ({ attProjeto, inativarProjeto }: Iprops) => {
  const fetchProjeto = async () => {
    const res = await api.get<IdadosApi>("/projetos");
    return res.data;
  };

  const { data, error, isLoading } = useQuery<IdadosApi>({
    queryKey: ["projetosAtivos", attProjeto],
    queryFn: fetchProjeto,
  });

  const navigate = useNavigate();
  return (
    <>
      {data?.dados.map((dados) => (
        <div
          key={dados.id_projeto}
          className={styles.cardProjeto}
          onClick={() => navigate("/detalhesProjeto")}
        >
          <h2>{dados.nome_projeto}</h2>
          <div>
            <h2>descrição: {dados.descricao}</h2>
            <p>criado em {dados.to_char}</p>
            <p>comentarios...</p>
          </div>
          <Deletar texto="Apagar projeto" funcao={() => inativarProjeto} />
        </div>
      ))}
    </>
  );
};

export default ProjetosAtivos;
