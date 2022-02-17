import React from 'react'
import PropTypes from 'prop-types'
import Gif from './Gif';

import { useFetchGifs } from '../hooks/useFetchGifs';


const Grid = ({ category }) => {

  const { data: gifs, loading } = useFetchGifs(category);
  
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
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
