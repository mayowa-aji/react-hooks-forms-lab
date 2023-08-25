import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const initialValues = {
    name:"",
    category:"Produce"
  }

  const [ formData, setFormData] = useState(initialValues)

  const {name, category} = formData




  function handleChange(e){
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(e){
    e.preventDefault()
    props.setItems(items => [...items, formData])

  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange} />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={handleChange}
          >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
