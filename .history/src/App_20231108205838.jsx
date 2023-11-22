import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Index from './components/users/Index.jsx'
import Create from './components/users/Create.jsx'
import Details from './components/users/Details.jsx'

export default function App() {
  return (
    <Routes>
      <Route path='/'element={<Index />} />
      <Route path='/user/index' element={<Index />} />
      <Route path='/user/:id' element={<Details />} />
      <Route path='/user/create' element={<Create />} />
    </Routes>
  )
}
