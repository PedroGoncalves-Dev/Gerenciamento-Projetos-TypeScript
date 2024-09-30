import styles from "./Projetos.module.css";
import { api } from "../../axios/baseUrl";
import { useQuery } from "@tanstack/react-query";
import { IdadosApi } from "../../interfaces/resApi";

import { useNavigate } from "react-router-dom";
import ModalAddProjeto from "@/components/Modal/ModalAddProjeto";
import { useState } from "react";
import Deletar from "@/components/BotaoDeletarProjeto/BotaoDeletarProjeto";

interface Iproeto {
  id_projeto: number;
  nome_projeto: string;
  descricao: string;
  to_char: string;
  ativo_projeto: boolean;
}
interface IdadosProjeto extends IdadosApi {
  dados: Iproeto[];
}

interface Iinativar {
  id_projeto: number;
}

const Projetos = () => {
  const [attProjeto, setAttProjeto] = useState(false);

  const fetchProjeto = async () => {
    const res = await api.get<IdadosProjeto>("/projetos");
    return res.data;
  };

  //inativar projeot
  const inativarProjeto = async ({ id_projeto }: Iinativar) => {
    try {
      await api.patch(`/inativarProjeto/${id_projeto}`);
    } catch (error) {
      return console.log(error);
    }
  };

  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery<IdadosProjeto>({
    queryKey: ["projetos", attProjeto],
    queryFn: fetchProjeto,
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <section>
      <div className={styles.conteudoTop}>
        <div className={styles.conteudoTopMeio}>
          <h2>Lista de todos os seus projetos</h2>
          <p>gerencie seus proejtos com mais facilidade...</p>
        </div>

        <div className={styles.conteudoTopDireita}>
          <ModalAddProjeto
            setAttProjeto={setAttProjeto}
            attProjeto={attProjeto}
          />
        </div>
      </div>

      <div className={styles.containerProjetos}>
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
            <Deletar
              texto="Apagar projeto"
              funcao={() => inativarProjeto({ id_projeto: dados.id_projeto })}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projetos;
