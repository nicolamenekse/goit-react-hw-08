import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(register(user));
  };
  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="parola"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Kayıt ol </button>
      </form>
    </div>
  );
}
