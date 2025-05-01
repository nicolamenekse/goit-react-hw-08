import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authOperations";
import {
  addContact,
  deleteContact,
} from "../../redux/contacts/contactsOperations";
import { selectItems } from "../../redux/contacts/contactsSelector";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const exitClick = () => {
    dispatch(logout());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  const deleteClick = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
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

      <div>
        <ul>
          {
            items.map((item)=>{
              return(
                <li key={item.id}> {item.name} : {item.number} 
                 <button onClick={()=>deleteClick(item.id)} >Sil</button>
                </li>
              )
            })
          }
         
        </ul>
      </div>

      <div>
        <h1>Contacts Page</h1>
        <button onClick={exitClick}>Cikis yap</button>
      </div>
    </div>
  );
}
