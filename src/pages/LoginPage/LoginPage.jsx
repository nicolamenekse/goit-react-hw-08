import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/authOperations";
import { selectIsLoggedIn} from "../../redux/auth/authSelectors";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {Formik,Field,Form,ErrorMessage} from 'formik'
import * as Yup from "yup"
import Button from '@mui/material/Button';


export default function LoginPage() {
  const dispatch = useDispatch();
  const isLoggeddIn = useSelector(selectIsLoggedIn)


  const initialValues = {
    email:"",
    password:""
  }

  const validationSchema = Yup.object({
    email:Yup.string().email("Geçerli bir e-posta giriniz").required("e posta zorunludurrrrrrrrr"),
    password:Yup.string().min(6,"En az 6 karakterli olmalıdır").required("Sifre szorunludururr")
    
  })
 
  const handleSubmit = (values)=>{
    dispatch(login(values))
  }

  return (
    <>
    

      <Formik  initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <Field type="email" id="email" name="email" placeholder="emaili giriniz"  />
          <Field type="password" id="password" name="password" placeholder="parolayı giriniz" />
          <Button type="submit" variant="contained">Giriş yap</Button>
        </Form>
      </Formik>
      <Link to="/register" >Henüz kaydınız yoksa Kayıt ol</Link>
    </>
  );
}
