import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import SignInPage from './Pages/SignIn/SignInPage'
import SignUpPage from './Pages/SignUp/SignUpPage'
import HomePage from './Pages/HomePage/HomePage'
import Hotel from './Pages/Hotel/Hotel'
import SpecificDestination from './Pages/Destination/SpecificDestination'
import SpecificHotel from './Pages/Hotel/SpecificHotel/SpecificHotel';
import WithNav from './components/Nav/NavOrNot/WithNav'
import WithoutNav from './components/Nav/NavOrNot/WithoutNav'
import AddHotelReview from './Pages/Hotel/AddHotelReview/AddHotelReview';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path='/login' element={<SignInPage />} />
            <Route path="/register" element={<SignUpPage />} />
          </Route>
          <Route element={<WithNav />} >
            <Route path='/' element={<HomePage />} exact />
            <Route path='/destinations/:id' element={<SpecificDestination />} />
            <Route path='/hotels/bydestination/:destid' element={<Hotel />} />
            <Route path='/hotels/:hotelId' element={<SpecificHotel />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/hotels/addreview/:hotelId" element={<AddHotelReview />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
