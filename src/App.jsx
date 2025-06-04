// hooks, package and other necessary tools
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetail from '../pages/MoviePage'
import DefaultLayouts from '../layouts/DefaultLayouts'
import Homepage from '../pages/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />} >
            <Route path="/" element={<Homepage />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App