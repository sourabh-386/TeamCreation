import React from 'react'
import Home from './pages/home/Home'
import Team from './pages/team/Team'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './component/nav/Nav'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import UserReducer from './redux/UserReducer'





const store = configureStore({
  reducer: {
    UserReducer

  }
})


const App = () => {
  return (
    <Provider store={store}>
        <Router >

          <Nav/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/team' element={<Team />} />
          </Routes>
        </Router>
    </Provider>
  )
}

export default App