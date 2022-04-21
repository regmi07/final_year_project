import React from 'react';
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
import Booking from './Pages/Hotel/Booking/Booking'
import TravelPackage from './Pages/TravelPackage/TravelPackage'
import SpecificTravelPackage from './Pages/TravelPackage/SpecificTravelPackage/SpecificTravelPackage'
import TravelPackageBooking from './Pages/TravelPackage/TravelPackageBooking/TravelPackageBooking'
import Profile from './Pages/Profile/Profile'
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
            <Route path='/hotels/booking/:hotelId' element={<Booking />} />
            <Route path='/travelpackage' element={<TravelPackage />} />
            <Route path='/travelpackage/:packageId' element={<SpecificTravelPackage />} />
            <Route path='/travelpackage/booking/:packageId' element={<TravelPackageBooking />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/hotels/addreview/:hotelId" element={<AddHotelReview />} />
              <Route path="/profile" element={<Profile />} /> 
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
