import React, { useState } from 'react'
import PropTypes from 'prop-types'
import defaultImg from '../assets/download.jpg'

const Newsitem = (props) => {

  let [imgHasError, setImgHasError] = useState(false)
  const updateImgHasError = () => {
    setImgHasError(true)
  }

  let { title, description, img_url, news_url, date, author, source } = props
  return (
    <div className='my-3'>
      <div className="card mb-3">
        <img src={imgHasError || !img_url ? defaultImg : img_url} className="card-img-top" alt="News" onError={updateImgHasError} />
        <div className="card-body">
          <h5 className="card-title">{title} <span className="badge text-bg-info">{source}</span></h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toUTCString()}</small></p>
          <a href={news_url} target="_blank" className="btn btn-primary">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default Newsitem
