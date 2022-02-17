import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Gif from './Gif';

import { getGif } from '../helpers/gifService';


const Grid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const _gifs = await getGif(category);
    setGifs(_gifs)
  }, [category]);
  
  return (
    <>
      <h3>{category}</h3>
      <div className="grid">
        {
          gifs.map(gif => (
            <Gif 
              key={gif.id}
              {...gif}
            />
          ))
        }
      </div>
    </>
  )
}

Grid.propTypes = {
  category: PropTypes.string.isRequired
}

export default Grid
