import { useState } from "react";

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ fullname: "", phone_name: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_name === "") {
      return false;
    }

    addContact([...contacts, form]);

    setForm({ fullname: "", phone_name: "" });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Fullname"
          value={form.fullname}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="phone_name"
          placeholder="Phone"
          value={form.phone_name}
          onChange={handleChange}
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
