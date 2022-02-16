import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../assets/dogs.svg";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Cadastrar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
