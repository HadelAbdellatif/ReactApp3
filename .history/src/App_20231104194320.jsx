import React from 'react'
import { Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path='/' />
      <Route path='/user/index' element={} />
      <Route path='/user/create' />
    </Routes>
  )
}
