// src/components/PetForm/PetForm.jsx

import { useState } from 'react';

const FunkoForm = (props) => {
  // formData state to control the form.
  const [formData, setFormData] = useState({
    name: '',
    series: '',
    number: '',
    rarity: '',
  });

  // handleChange function to update formData state.
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  // And finally, the form itself.
  return (
    <div>
      <form>
        <label htmlFor="name"> Name </label>
        <input
          type='text'
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="series"> Series </label>
        <select
          type='text'
          id="series"
          name="series"
          value={formData.series}
          onChange={handleChange}
          required
        >
            {series_enum.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        <label htmlFor="number"> Number </label>
        <input
          type='number'
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
        <label htmlFor="rarity"> Rarity </label>
        <input
          type='text'
          id="rarity"
          name="rarity"
          value={formData.rarity}
          onChange={handleChange}
        />
        <button type="submit">Add New Funko</button>
      </form>
    </div>
  );
};

export default FunkoForm;
