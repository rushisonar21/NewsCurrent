import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" category="general" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>
          <Route exact path="/general" element={<News key="general" category="general" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>
          <Route exact path="/sports" element={<News  key="sports" category="sports" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>
          <Route exact path="/business" element={<News key="business" category="business" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>  
          <Route exact path="/technology" element={<News key="technology" category="technology" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>
          <Route exact path="/health" element={<News key="health" category="health" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>
        </Routes>
      </Router>
      </>
    )
  }
}



