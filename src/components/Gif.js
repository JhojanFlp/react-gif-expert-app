import React from 'react'
import PropTypes from 'prop-types'

const Gif = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__backInUp">
      <img src={url} alt={title} />
      <p>{title || id}</p>
    </div>
  ) 
}

Gif.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Gif
