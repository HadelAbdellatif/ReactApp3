import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Index from './components/users/Index.jsx'
import Create from './components/users/Create.jsx'

export default function App() {
  return (
    <Routes>
      <Route path='/'element={<Index />} />
      <Route path='/user/index' element={<Index />} />
      <Route path='/user/:id' element={<Index />} />
      <Route path='/user/create' element={<Create />} />
    </Routes>
  )
}
