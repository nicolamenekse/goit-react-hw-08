import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./RegisterForm.module.css";

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
    toast.success("Kayıt Başarılı!");
  };

  return (
    <div className={css.containerRegister}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={registerSubmit}
        className={css.formik}
      >
        <Form>
          <h3 className={css.title}>Kayıt ol</h3>
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
          <button type="submit">Kayıt ol</button>
        </Form>
      </Formik>
      <div className={css.loginButton}>
        <Link to="/login">Giriş yap</Link>
      </div>
      <div className={css.homePage}>
        <Link to="/">Ana Sayfa</Link>
      </div>
    </div>
  );
}
