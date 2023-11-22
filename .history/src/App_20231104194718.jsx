import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Index from './components/users/Index.jsx'
import Create from './components/users/Create/Create.jsx'

export default function App() {
  return (
    <Routes>
      <Route path='/' />
      <Route path='/user/index' element={<Index.jsx />} />
      <Route path='/user/create' element={<Create.jsx />} />
    </Routes>
  )
}
