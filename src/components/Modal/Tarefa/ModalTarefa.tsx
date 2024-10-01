import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import styles from "./ModalTarefa.module.css";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { SetStateAction } from "react";

const ModalTarefa = () => {
  return (
    <ul>
      <Dialog>
        <DialogTrigger className={styles.trigger}>
          <li>Tarefa 1</li>
        </DialogTrigger>

        <DialogTrigger className={styles.trigger}>
          <li>Tarefa 1</li>
        </DialogTrigger>
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
