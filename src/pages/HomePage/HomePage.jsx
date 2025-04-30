import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Hosgeldin , burası homepagen</h1>
      <p>
        <Link to="/login">Giriş Yap</Link>
        yadaaaaa
        <Link to="/register">Kayıt Ol</Link>
      </p>
    </div>
  );
}
