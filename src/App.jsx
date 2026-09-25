import React from 'react'
import Home from './Common/Pages/Home'
import About from './Common/Pages/About'
import { Route, Routes } from 'react-router-dom'
import Orphanages from './Common/Pages/Orphanages'
import Contact from './Common/Pages/Contact'
import Dashboard from './Donor/Pages/Dashboard'
import Browse from './Donor/Pages/Browse'
import MyDonation from './Donor/Pages/MyDonation'
import Money from './Donor/Pages/Money'
import Essential from './Donor/Pages/Essential'
import Auth from './Common/Pages/Auth'
import { ToastContainer } from 'react-toastify'
import ProfileSetting from './Donor/Pages/ProfileSetting'
import Registration from './Orphanage/Pages/Registration'
import Dashboard2 from './Orphanage/Pages/Dashboard2'
import Manage from './Orphanage/Pages/Manage'
import Request from './Orphanage/Pages/Request'
import Money2 from './Orphanage/Pages/Money2'
import Received from './Orphanage/Pages/Received'
import Settings2 from './Orphanage/Pages/Settings2'
import Chat from './Donor/Pages/Chat'
import Chat2 from './Orphanage/Pages/chat2'
import Paymentsuccess from './Donor/Pages/Paymentsuccess'
import PaymentError from './Donor/Pages/PaymentError'
import AdminDash from './Admin/Pages/AdminDash'
import BrowseorphanAdmin from './Admin/Pages/BrowseorphanAdmin'
import BrowseDonor from './Admin/Pages/BrowsedonorAdmin'
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/orphanages" element={<Orphanages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/mydonation" element={<MyDonation />} />
          <Route path="/money" element={<Money />} />
          <Route path="/essential" element={<Essential />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/Register" element={<Auth inside />} />
          <Route path="/setting" element={<ProfileSetting />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/request" element={<Request />} />
          <Route path="/money2" element={<Money2 />} />
          <Route path="/received" element={<Received />} />
          <Route path="/settings2" element={<Settings2 />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat2" element={<Chat2 />} />
          <Route path="/paymentsuccess" element={<Paymentsuccess />} />
          <Route path="/paymenterror" element={<PaymentError />} />
          <Route path="/admindash" element={<AdminDash />} />
          <Route path="/browseAdmin" element={<BrowseorphanAdmin />} />
          <Route path="/userAdmin" element={<BrowseDonor />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          theme="colored"
        />
      </div>
    </>
  )
}

export default App
