import styles from "./ModalAddProjeto.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../ui/dialog";

import BotaoAdd from "../botaoAddProjeto/BotaoAdd";
import { useState } from "react";
import { api } from "@/axios/baseUrl";

interface Idados {
  nome_projeto: string;
  descricao: string;
}
interface Iprops {
  setAttProjeto: React.Dispatch<React.SetStateAction<boolean>>;
  attProjeto: boolean;
}

const ModalAddProjeto = ({ setAttProjeto, attProjeto }: Iprops) => {
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Idados>();

  const onSubmit: SubmitHandler<Idados> = async (data: Idados) => {
    try {
      await api.post("/cadastrarProjeto", data);

      setOpenModal(false);
      setAttProjeto(!attProjeto);
      reset();
    } catch (error) {
      console.log("erro ao cadastrar projeto", error);
    }
  };
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger>
        <BotaoAdd texto="Adicionar Projeto" />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            Adicionar novo Projeto
          </DialogTitle>

          <DialogDescription className="text-center">
            Adicionar um novo projeto aqui...
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label>
            <span>Nome projeto</span>
            <input
              type="text"
              placeholder="Digite o nome do projeto"
              {...register("nome_projeto", {
                required: "Nome do projeto Obrigatorio",
              })}
            />
          </label>
          {errors.nome_projeto && <p>{errors.nome_projeto.message}</p>}

          <label>
            <span>Descricao</span>
            <textarea
              placeholder="Digite uma descrição para o projeot"
              {...register("descricao", { required: "Descrição obrigatoria" })}
            />
          </label>
          {errors.descricao && <p>{errors.descricao.message}</p>}
          <button type="submit">Adicioanr projeto</button>
        </form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddProjeto;
