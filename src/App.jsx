import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  let api_key = import.meta.env.VITE_API_KEY
  let [progress, setProgress] = useState(10)

  const updateProgress = (new_progress) => {
    setProgress(new_progress)
  }
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        height={2}
      />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/NewsCurrent" element={<News updateProgress={updateProgress} key="general" category="general" api_key={api_key} />}></Route>
          <Route exact path="/NewsCurrent/general" element={<News updateProgress={updateProgress} key="general" category="general" api_key={api_key} />}></Route>
          <Route exact path="/NewsCurrent/sports" element={<News updateProgress={updateProgress} key="sports" category="sports" api_key={api_key} />}></Route>
          <Route exact path="/NewsCurrent/business" element={<News updateProgress={updateProgress} key="business" category="business" api_key={api_key} />}></Route>
          <Route exact path="/NewsCurrent/technology" element={<News updateProgress={updateProgress} key="technology" category="technology" api_key={api_key} />}></Route>
          <Route exact path="/NewsCurrent/health" element={<News updateProgress={updateProgress} key="health" category="health" api_key={api_key} />}></Route>
          <Route exact path="/NewsCurrent/entertainment" element={<News updateProgress={updateProgress} key="entertainment" category="entertainment" api_key={api_key} />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;



