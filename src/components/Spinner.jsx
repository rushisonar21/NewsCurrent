import React, { Component } from 'react'
import loader from '../assets/loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={loader} alt='loading'/>
      </div>
    )
  }
}

export default Spinner
