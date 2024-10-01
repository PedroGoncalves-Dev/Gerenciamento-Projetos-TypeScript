import { useQuery } from "@tanstack/react-query";
import styles from "./ProjAtivos.module.css";
import "./ProjetoAtivos.css";
import Deletar from "@/components/BotaoDeletarProjeto/BotaoDeletarProjeto";
import { IdadosApi } from "@/interfaces/resApi";
import { api } from "@/axios/baseUrl";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import ModalTarefa from "@/components/Modal/Tarefa/ModalTarefa";
import { useState } from "react";

interface IpropsFuncao {
  id_projeto: number;
}
interface Iprops {
  attProjeto: boolean;
  inativarProjeto: (id_projeto: IpropsFuncao) => void;
}

const ProjetosAtivos = ({ attProjeto, inativarProjeto }: Iprops) => {
  const [modalTarefa, setModalTarefa] = useState(false);

  // req projeto
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
          // onClick={() => navigate("/detalhesProjeto")}
        >
          <div
            className={classNames(styles.cabecalho, "shapedividers_com-9066")}
          ></div>
          <h2>{dados.nome_projeto}</h2>

          <ModalTarefa />

          <Deletar
            texto="Excluir"
            funcao={() => inativarProjeto({ id_projeto: dados.id_projeto })}
          />
        </div>
      ))}
    </>
  );
};

export default ProjetosAtivos;
