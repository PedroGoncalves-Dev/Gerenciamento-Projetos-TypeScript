import styles from "./Projetos.module.css";
import { api } from "../../axios/baseUrl";
import { useQuery } from "@tanstack/react-query";
import { IdadosApi } from "../../interfaces/resApi";

import { useNavigate } from "react-router-dom";
import ModalAddProjeto from "@/components/Modal/ModalAddProjeto";
import { useState } from "react";
import Deletar from "@/components/BotaoDeletarProjeto/BotaoDeletarProjeto";
import BotoesStatus from "@/components/BotoesAtivoEsperaInativo/BotoesStatus";
import ProjetosAtivos from "@/components/Projetos/ativos/ProjAtivos";

interface Iinativar {
  id_projeto: number;
}

const Projetos = () => {
  const [attProjeto, setAttProjeto] = useState(false);

  //inativar projeot
  const inativarProjeto = async ({ id_projeto }: Iinativar) => {
    try {
      await api.patch(`/inativarProjeto/${id_projeto}`);
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <section>
      <div className={styles.conteudoTop}>
        <BotoesStatus />

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
        <ProjetosAtivos
          attProjeto={attProjeto}
          inativarProjeto={() => inativarProjeto}
        />
      </div>
    </section>
  );
};
export default Projetos;
