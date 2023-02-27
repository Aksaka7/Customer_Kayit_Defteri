import { useState } from "react";

function List({ contacts }) {
  const [filter, setFilter] = useState("");

  const filtrelendirme = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toLocaleLowerCase());
    });
  });

  console.log("filtrelendirme", filtrelendirme);

  return (
    <div>
      <input
        placeholder="Filtrele"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ul className="list">
        {filtrelendirme.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_name}</span>
          </li>
        ))}
      </ul>

      <p>Toplam contact ( {filtrelendirme.length} )</p>
    </div>
  );
}

export default List;
