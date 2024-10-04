import styles from "./Login.module.css";

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
    </form>
  );
};

export default Login;
