import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import Grid from './components/Grid';

const GifExpertApp = ({ defaultCategories = []}) => {
  const [categories, setCategories] = useState(defaultCategories);

  const addCategory = (category = '') => {
    if (!category) return
    setCategories([ category, ...categories ]);
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory addCategory={addCategory} />
      <hr />
      <ol>
        {
          categories.map(category => 
            <Grid 
              key={category}
              category={category}
            />
          )
        }
      </ol>
    </>
  )
}

export default GifExpertApp
