import React from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,RouterProvider,createRoutesFromElements,createBrowserRouter } from 'react-router-dom';
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



const App = () => {

  
  const router=createBrowserRouter(
    createRoutesFromElements( 
    <>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/category' element={<CategoryPage/>}/>
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





    </>
  )
  
);

  return <RouterProvider router={router}/>;
}

export default App;
