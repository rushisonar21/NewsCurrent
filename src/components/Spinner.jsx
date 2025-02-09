import React, { Component } from 'react'
import loader from '../assets/loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loader} alt='loading'/>
      </div>
    )
  }
}

export default Spinner
