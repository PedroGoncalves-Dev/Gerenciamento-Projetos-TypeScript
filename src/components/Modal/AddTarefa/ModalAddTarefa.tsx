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
        <h2>testando...</h2>

        <DialogFooter>
          <DialogClose>
            <Button>Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddTarefa;
