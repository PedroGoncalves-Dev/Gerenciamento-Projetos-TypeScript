import { useNavigate } from "react-router-dom";
import styles from "./GridProjetoUsuario.module.css";
import { api } from "../../axios/baseUrl";
import { useQuery } from "@tanstack/react-query";
import { IrespostaApi } from "@/interfaces/resApi";
import { useState, useEffect, SetStateAction } from "react";

interface IdadosProjeto extends IrespostaApi {
  dados: string | number;
}

const GridProjetoUsuario = () => {
  const navigate = useNavigate();

  const [numeroFinal, setNumeroFinal] = useState(100);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    let intervalo = setInterval(() => {
      if (contador < numeroFinal) {
        setContador(contador + 1);
      } else {
        clearInterval(intervalo);
      }
    }, 50);

    return () => clearInterval(intervalo);
  }, [contador, numeroFinal]);

  // Função para buscar o total de projetos
  const fetchTotalProjetos = async (): Promise<IdadosProjeto> => {
    const res = await api.get<IdadosProjeto>("/totalProjeto");
    return res.data;
  };

  const { data, error, isLoading } = useQuery<IdadosProjeto, Error>({
    queryKey: ["totalProjeto"], // Passando a queryKey corretamente
    queryFn: fetchTotalProjetos,
    refetchOnWindowFocus: true, // Passando a função de busca
    // select: (data) => {
    //   setNumeroFinal(data.dados);
    //   return data;
    // },
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>{error.message}</div>;


  return (
    <div className={styles.container}>
      <div className={styles.cardProjeto} onClick={() => navigate("/projetos")}>
        <h2>Projetos</h2>
        <p>{data?.dados}</p>
        <div>
          <p>{contador}...</p>
        </div>
      </div>

      <div className={styles.cardProjeto}>
        <h2>Usuários</h2>
        <p>Total de usuários</p>
        <div>
          <p>Categorias...</p>
        </div>
      </div>
    </div>
  );
};

export default GridProjetoUsuario;
