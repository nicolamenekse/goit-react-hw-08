import React, { useState, useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authOperations";
import {
  addContact,
  deleteContact,
} from "../../redux/contacts/contactsOperations";
import { selectItems } from "../../redux/contacts/contactsSelector";
import toast from "react-hot-toast";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import css from './ContactsPage.module.css'
export default function ContactsPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const exitClick = () => {
    dispatch(logout());
    toast.success("Cıkıs yaptınız", {
      style: {
        color: "green",
        backgroundColor: "gray",
      },
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    toast.success(`${name} eklendi`, {
      style: {
        color: "green",
        backgroundColor: "black",
      },
    });
    setName("");
    setNumber("");
  };

  const deleteClick = (id) => {
    dispatch(deleteContact(id));
    toast.error(`Silindi`, {
      style: {
        color: "red",
        backgroundColor: "black",
      },
    });
  };

  const avatarMapRef = useRef({});
  const getAvatarId = (id) => {
    if (!avatarMapRef.current[id]) {
      avatarMapRef.current[id] = Math.floor(Math.random() * 51);
    }
    return avatarMapRef.current[id];
  };
  
  return (
    <div className={css.containerContacts}>
      <div className={css.contactForm}>
        <form onSubmit={handleAdd}>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Kaydedilecek kişinin Adı"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="phone"
            value={number}
            placeholder="Kaydedilecek kisinin numarası"
            onChange={(e) => setNumber(e.target.value)}
          />

          <button type="submit">Kaydet</button>
        </form>
      </div>

      <div className={css.contactList}>
        <ul>
          {items.map((item) => {
            const avatarId = getAvatarId(item.id);
            return (
              <li key={item.id} className={css.figure}>
               <img src={`https://randomuser.me/api/portraits/women/${avatarId}.jpg`}  />
                <p className={css.figcaption} >{item.name} </p>
                <p>{item.number}</p>
                
                <button onClick={() => deleteClick(item.id)}>Sil</button>
              </li>
            );
          })}
        </ul>
      </div>
      

      <div className={css.exitButton}>
        <button onClick={exitClick}>Cikis yap</button>
      </div>
    </div>
  );
}
