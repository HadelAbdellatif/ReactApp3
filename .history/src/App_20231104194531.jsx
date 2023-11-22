import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Index.jsx from './'


export default function App() {
  return (
    <Routes>
      <Route path='/' />
      <Route path='/user/index' element={<Index.jsx />} />
      <Route path='/user/create' element={<Create.jsx />} />
    </Routes>
  )
}
