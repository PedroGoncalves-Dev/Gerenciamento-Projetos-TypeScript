import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "@/axios/baseUrl";
import { IrespostaApi } from "@/interfaces/resApi";

interface IpropsSubmit {
  username_usu: string;
  senha_usu: string;
}

interface IreturnData extends IrespostaApi {
  dados: IpropsSubmit[];
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IpropsSubmit>();

  const onSubmit = async (data: IpropsSubmit) => {
    const res = await api.post<IreturnData>("/login", data);

    if (res.data.sucesso) {
      console.log("loginsucesso");
    }
  };
  return (
    <form className={styles.formL} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>UserName:</span>
        <input
          type="text"
          placeholder="Seu userName para poder acessar"
          {...register("username_usu", { required: "Username obrigatorio" })}
        />
        {errors.username_usu && (
          <p style={{ color: "#a93545" }}>{errors.username_usu.message}</p>
        )}
      </label>

      <label>
        <span>Senha:</span>
        <input
          type="password"
          placeholder="****"
          {...register("senha_usu", { required: "Senha obrigatoria" })}
        />
        {errors.senha_usu && (
          <p style={{ color: "#a93545" }}>{errors.senha_usu.message}</p>
        )}
      </label>

      <button type="submit">Login</button>

      <div className={styles.links}>
        <Link to={"/"}>Esqueceu a senha ?</Link>
        <Link to={"/"}>Cadastrar nova conta</Link>
      </div>
    </form>
  );
};

export default Login;
