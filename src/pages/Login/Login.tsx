import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className={styles.formL}>
      <label>
        <span>UserName:</span>
        <input type="text" placeholder="Seu userName para poder acessar" />
      </label>

      <label>
        <span>Senha:</span>
        <input type="password" placeholder="****" />
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
