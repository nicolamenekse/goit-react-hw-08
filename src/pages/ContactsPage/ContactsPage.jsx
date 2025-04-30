// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectItems } from "../../redux/contacts/contactsSelector";
// import { addContact } from "../../redux/contacts/contactsOperations";

// export default function ContactsPage() {
//   const dispatch = useDispatch();
//   const items = useSelector(selectItems);
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addContact({ name, phone }));
//   };
// console.log(items)
//   return (
//     <>
//       <h1>Contacts Page</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           placeholder="name"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="number"
//           value={phone}
//           placeholder="numara"
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <button type="submit">Ekle</button>
//       </form>
//       <ul>
//         {items.map((item) => {
//           <li key={item.id}>{item.name}</li>;
//         })}
//       </ul>
//     </>
//   );
// }


import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/auth/authOperations'

export default function ContactsPage() {
    const dispatch = useDispatch()
    
    const exitClick = ()=>{
        dispatch(logout())
    }
  return (
    <div>
        <h1>Contacts Page</h1>
        <button onClick={exitClick} >Cıkıs yap</button>
    </div>
  )
}
