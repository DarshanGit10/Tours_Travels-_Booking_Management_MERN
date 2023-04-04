import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResult from '../pages/SearchResult'
import TourDetails from '../pages/TourDetails'
import Tours from '../pages/Tours'


const Routers = () => {
  return (
    <>
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate to='/home'/>} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/tours/search" element={<SearchResult />} />
          <Route exact path="/tours/:id" element={<TourDetails />} />
          <Route exact path="/tours" element={<Tours />} />
      </Routes>
    </div>
    </>
  )
}

export default Routers