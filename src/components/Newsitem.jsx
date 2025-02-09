import React, { Component } from 'react'
import PropTypes from 'prop-types'
import defaultImg from '../assets/download.jpg'

export class Newsitem extends Component {
  static propTypes = {
  }

  render() {
    let { title, description, img_url, news_url, date ,author, source} = this.props
    return (
      <div className='my-3'>
        <div className="card mb-3">
          <img src={img_url ? img_url : defaultImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <span class="badge text-bg-info">{source}</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toUTCString()}</small></p>
            <a href={news_url} target="_blank" className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
