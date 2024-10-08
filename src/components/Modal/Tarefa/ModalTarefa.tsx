import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import styles from "./ModalTarefa.module.css";
import { api } from "@/axios/baseUrl";
import { IdadosT } from "@/interfaces/resApi";
import { IrespostaApi } from "@/interfaces/resApi";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface Iprops {
  id_projeto: number;
}

interface Itarefa {
  id_tarefa: number;
  tarefa: string;
  comentario_tarefa: string;
  username_usu: string;
}

interface IdetalhesTarefa extends IrespostaApi {
  dados: Itarefa[];
}

const ModalTarefa = ({ id_projeto }: Iprops) => {
  const [id, setId] = useState<number | undefined>(undefined);

  const urlTarefa = `/tarefas/${id_projeto}`;

  const fetchTarefa = async () => {
    const res = await api.get<IdadosT>(urlTarefa);
    return res.data;
  };

  const {
    data: projeto,
    error,
    isLoading,
  } = useQuery<IdadosT>({
    queryKey: ["tarefa", id_projeto],
    queryFn: fetchTarefa,
    retry: 19,
  });

  //detalhes tarefa

  const fetchDetalhesTarefa = async (): Promise<IdetalhesTarefa> => {
    if (id) {
      const res = await api.get<IdetalhesTarefa>(
        `http://localhost:3000/detalhesTarefa/${id}`
      );
      return res.data;
    } else {
      throw new Error("Falha de id");
    }
  };

  const { data: tarefaDetalhes } = useQuery<IdetalhesTarefa>({
    queryKey: ["detalhesTarefa", id],
    queryFn: fetchDetalhesTarefa,
    refetchOnWindowFocus: false,
  });

  if (error) return <div>'erro</div>;
  if (isLoading) return <div>'carregando'</div>;

  return (
    <Dialog>
      {projeto?.dados.map((dados) => (
        <DialogTrigger
          className={styles.trigger}
          key={dados.id_tarefa}
          onMouseEnter={() => setId(dados.id_tarefa)}
        >
          <li>{dados.tarefa}</li>
        </DialogTrigger>
      ))}

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            Informações da tarefa
          </DialogTitle>
          <DialogDescription className="text-center">
            Testando
          </DialogDescription>
        </DialogHeader>
        {tarefaDetalhes?.dados.map((detalhes) => (
          <div key={detalhes.id_tarefa} className={styles.containerDetalhes}>
            <div>
              <h2>{detalhes.tarefa}</h2>
              <p>{detalhes.comentario_tarefa}</p>
            </div>

            <div>
              <ul>
                <li>{detalhes.username_usu}</li>
                <li>email do usu</li>
                <li>data da tarefa</li>
              </ul>
            </div>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default ModalTarefa;
