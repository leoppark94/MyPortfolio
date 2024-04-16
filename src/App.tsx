import React from 'react'
import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import FrontendPage from './components/pages/FrontEndDemoPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/frontend_demo" element={<FrontendPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
