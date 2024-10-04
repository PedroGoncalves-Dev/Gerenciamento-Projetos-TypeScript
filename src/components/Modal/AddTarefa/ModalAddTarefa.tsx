import styles from "./ModalAddTarefa.module.css";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { MdAddCircleOutline } from "react-icons/md";

// interface Iprops {
//   id_projeto: number;
// }
const ModalAddTarefa = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <li className={styles.addNovaTarefa}>
          Nova tarefa <MdAddCircleOutline color="#000000c0" />
        </li>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar nova tarefa</DialogTitle>

          <DialogDescription>
            Cria uma nova tarefa para o projeto...
          </DialogDescription>
        </DialogHeader>
        <form>
          <label>
            <span>Tarefa:</span>
            <input type="text" placeholder="Digite a nova tarefa..." />
          </label>

          <label>
            <span>Comentario:</span>
            {/* <textarea
              placeholder="Explique melhor a tarefa..."
              {...register("")}
            /> */}
          </label>
        </form>

        <DialogFooter>
          <DialogClose asChild>
            <Button>Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddTarefa;
