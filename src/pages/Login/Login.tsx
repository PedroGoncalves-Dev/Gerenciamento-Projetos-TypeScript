import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface IpropsSubmit {
  username_usu: string;
  senha_usu: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IpropsSubmit>();

  const onSubmit = (data: IpropsSubmit) => {};
  return (
    <form className={styles.formL} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>UserName:</span>
        <input
          type="text"
          placeholder="Seu userName para poder acessar"
          {...register("username_usu", { required: "Username obrigatorio" })}
        />
        {errors.username_usu && <p>{errors.senha_usu?.message}</p>}
      </label>

      <label>
        <span>Senha:</span>
        <input
          type="password"
          placeholder="****"
          {...register("senha_usu", { required: "Senha obrigatoria" })}
        />
        {errors.senha_usu && <p>{errors.senha_usu.message}</p>}
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
