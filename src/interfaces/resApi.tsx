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
