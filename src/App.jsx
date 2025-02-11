import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    progress: 10,
  }

  updateProgress = (new_progress)=>{
      this.setState({progress: new_progress})
  }
  api_key=import.meta.env.VITE_API_KEY
  render() {
    return (
      <>
      <LoadingBar
        color="#f11946"
        progress={this.state.progress}
        height={2}
      />
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/NewsCurrent" element={<News updateProgress = {this.updateProgress} key="general" category="general" api_key={this.api_key}/>}></Route>
          <Route exact path="/NewsCurrent/general" element={<News updateProgress = {this.updateProgress} key="general" category="general" api_key={this.api_key}/>}></Route>
          <Route exact path="/NewsCurrent/sports" element={<News updateProgress = {this.updateProgress}  key="sports" category="sports" api_key={this.api_key}/>}></Route>
          <Route exact path="/NewsCurrent/business" element={<News updateProgress = {this.updateProgress} key="business" category="business" api_key={this.api_key}/>}></Route>  
          <Route exact path="/NewsCurrent/technology" element={<News updateProgress = {this.updateProgress} key="technology" category="technology" api_key={this.api_key}/>}></Route>
          <Route exact path="/NewsCurrent/health" element={<News updateProgress = {this.updateProgress} key="health" category="health" api_key={this.api_key}/>}></Route>
          <Route exact path="/NewsCurrent/entertainment" element={<News updateProgress = {this.updateProgress} key="entertainment" category="entertainment" api_key={this.api_key}/>}></Route>
        </Routes>
      </Router>
      </>
    )
  }
}



