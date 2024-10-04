//dados da api de projetos
export interface IdadosApi {
  sucesso: boolean;
  mensagem: string;
  dados: Iproeto[];
}

export interface Iproeto {
  id_projeto: number;
  nome_projeto: string;
  descricao: string;
  to_char: string;
  status_projeto: boolean;
}

//tarefa
export interface IdadosT {
  sucesso: boolean;
  mensagem: string;
  dados: Itarefa[];
}
export interface Itarefa {
  id_tarefa: number;
  tarefa: string;
  comentario_tarefa: string;
  username_USU: string;
}

export interface IrespostaApi {
  sucesso: boolean;
  mensagem: string;
}
