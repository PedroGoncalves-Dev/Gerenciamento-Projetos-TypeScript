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
import { useQuery } from "@tanstack/react-query";

interface Iprops {
  id_projeto: number;
}

const ModalTarefa = ({ id_projeto }: Iprops) => {
  const urlTarefa = `/tarefas/${id_projeto}`;

  const fetchTarefa = async () => {
    const res = await api.get<IdadosT>(urlTarefa);
    return console.log(id_projeto), res.data;
  };

  const {
    data: projeto,
    error,
    isLoading,
  } = useQuery<IdadosT>({
    queryKey: ["tarefa", id_projeto],
    queryFn: fetchTarefa,
  });

  if (error) return <div>'erro</div>;
  if (isLoading) return <div>'carregando'</div>;

  return (
    <ul>
      <Dialog>
        {projeto?.dados.map((dados) => (
          <DialogTrigger className={styles.trigger} key={dados.id_tarefa}>
            <li>{dados.tarefa}</li>
          </DialogTrigger>
        ))}

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Informações da tarefa</DialogTitle>
            <DialogDescription>Testando</DialogDescription>
          </DialogHeader>
          <div>
            <h2>Nome tarefa</h2>
            <p>comentario da tarefa...</p>
          </div>

          <div>
            <h2>Usuario</h2>
            <ul>
              <li>Nome do usuario</li>
              <li>email do usu</li>
              <li>data da tarefa</li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </ul>
  );
};

export default ModalTarefa;
