import React, { Component } from 'react'
import PropTypes from 'prop-types'
import defaultImg from '../assets/download.jpg'

export class Newsitem extends Component {
  static propTypes = {
  }
  
  state = {
    imgHasError : false
  }
  updateImgHasError = ()=>{
    this.setState({imgHasError:true})
  }
  render() {
    let { title, description, img_url, news_url, date ,author, source} = this.props
    return (
      <div className='my-3'>
        <div className="card mb-3">
          <img src={this.state.imgHasError || !img_url ? defaultImg : img_url} className="card-img-top" alt="News" onError={this.updateImgHasError}/>
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
}

export default Newsitem
