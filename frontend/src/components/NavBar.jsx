import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector,useDispatch } from 'react-redux';
import {logout,reset} from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.auth)

  const onLogout=()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/')

  }
  return (
  <>
 <Navbar fixed="top" bg="red-950" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">EventEase</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/category">Event Categories</Nav.Link>
            <Nav.Link href="/setup-budget">Budget</Nav.Link>
            <Nav.Link href="/vendors">Vendors</Nav.Link>
            {user?(
           <button  typr="button" className="text-red-950 hover:bg-slate-400 rounded p-1 ml-4 font-bold bg-white" onClick={onLogout}>LogOut</button>

            ):(
            <>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            </>)}
            
          </Nav>
        </Container>
      </Navbar>

  </>
  )
}

export default NavBar
