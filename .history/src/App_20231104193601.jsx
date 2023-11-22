import React from 'react'
import { Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <h1>yh</h1>
    <Routes>
      <Route path='/' />
      <Route path='/user/index' />
      <Route path='/user/create' />
    </Routes>
  )
}
