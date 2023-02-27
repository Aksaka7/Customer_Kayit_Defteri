import { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form/Form";
import "./style.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_name: "+91 999 999 999",
    },
    {
      fullname: "Layane",
      phone_name: "+91 999",
    },
    {
      fullname: "Haydar",
      phone_name: "+165555 8852 9",
    },
    {
      fullname: "Tim",
      phone_name: "+91 999",
    },
    {
      fullname: "Zoe Nisa",
      phone_name: "+165555 8852 9",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
