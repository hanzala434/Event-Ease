import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import VendorsPage from './pages/VendorsPage';
import VendorProfile from './pages/VendorProfile';
import FormPage from './pages/FormPage';
import ThankYou from './pages/ThankYou';
import Login from './pages/Login';
import Register from './pages/Register';
import SetupBudget from './pages/SetupBudget';
import AddVendorPage from './pages/AddVendorPage';
import ServiceFormPage from './pages/ServiceFormPage';
import ServicePage from './pages/ServicePage';
import VendorCategoryPage from './pages/VendorCategoryPage';
import PackagePage from './pages/PackagePage';
import ContactUsPage from './pages/ContactUsPage';




function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/category' element={<CategoryPage/>}/>
    <Route path='/contact-us' element={<ContactUsPage/>}/>

    <Route path='/category-vendor' element={<VendorCategoryPage/>}/>
    <Route path='/vendors' element={<VendorsPage/>}/>
    <Route path='/vendor-profile/:id' element={<VendorProfile/>}/>
    <Route path='/setup-budget' element={<SetupBudget/>}/>
    <Route path='/vendor-form' element={<AddVendorPage/>}/>
    <Route path='/appointment/:id' element={<FormPage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/thank-u' element={<ThankYou/>}/>
    <Route path='/service-form/:id' element={<ServiceFormPage/>}/>
    <Route path='/service/:id' element={<ServicePage/>}/>
    <Route path='/packages/:id' element={<PackagePage/>}/>

    </Routes>



    </>
  )
  
}



export default App;
