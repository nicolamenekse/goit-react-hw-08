import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("geçerli email gir").required("zorunludur"),
    password: Yup.string()
      .min(6, "en az 6 akrakterli olmaldlır")
      .required("zorunludur"),
  });

  const registerSubmit = (values) => {
    dispatch(register(values));
  };

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(register({name,email,password}));
  //   toast.success("Kaydınız tamamlandı.")
  // };

  return (
    <div>
      <h1>Register Form</h1>
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={registerSubmit}
      >
        <Form>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="adınızı giriniz"
          />
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="emaili giriniz"
          />
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="parolayı giriniz"
          />
          <button type="submit" >Kayıt ol</button>
        </Form>
      </Formik>
      <Link to="/login">Giriş yap</Link>
    </div>
  );
}
