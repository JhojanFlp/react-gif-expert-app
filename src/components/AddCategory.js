import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ addCategory }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length >= 5) {
      addCategory(value);
      setValue('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Kimetsu No Yaiba"
      />
    </form>
  )
}

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired
}

export default AddCategory
