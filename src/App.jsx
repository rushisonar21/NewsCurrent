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
          <Route exact path="/NewsCurrent" element={<News key="general" category="general" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>
          <Route exact path="/NewsCurrent/general" element={<News key="general" category="general" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>
          <Route exact path="/NewsCurrent/sports" element={<News  key="sports" category="sports" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>
          <Route exact path="/NewsCurrent/business" element={<News key="business" category="business" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>  
          <Route exact path="/NewsCurrent/technology" element={<News key="technology" category="technology" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>
          <Route exact path="/NewsCurrent/health" element={<News key="health" category="health" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>
          <Route exact path="/NewsCurrent/entertainment" element={<News key="entertainment" category="entertainment" api_key="500bdbc1b2d147c2b4f352b3358d546c"/>}></Route>
        </Routes>
      </Router>
      </>
    )
  }
}



