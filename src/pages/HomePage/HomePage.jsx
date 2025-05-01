import React from "react";
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.containerHome}>
      <h1>PhoneBook'a Hoş Geldiniz!</h1>
      <p>
        <Link className={css.register} to="/register">
          Kayıt Ol
        </Link>
        veya
        <Link className={css.login} to="/login">
          Giriş Yap
        </Link>
      </p>
    </div>
  );
}
