import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleShow = () => setShowOffcanvas(true);
  const handleClose = () => setShowOffcanvas(false);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
    handleClose();
  };

  return (
    <>
    <div className='bg-red-950'>
      <Navbar  expand="lg">
        <Container>
          <Navbar.Brand href="/" className='text-white'>EventEase</Navbar.Brand>
          <Button
            variant="outline-light"
            className="d-lg-none"
            onClick={handleShow}
          >
            ☰
          </Button>
          <Navbar.Collapse className="d-none d-lg-flex ">
            <Nav className="me-auto">
              <Nav.Link className='text-white' href="/">Home</Nav.Link>
              <Nav.Link className='text-white' href="/category">Event Categories</Nav.Link>
              <Nav.Link className='text-white' href="/setup-budget">Budget</Nav.Link>
              <Nav.Link className='text-white' href="/category-vendor">Vendors</Nav.Link>
              {user ? (
                <button
                  type="button"
                  className="text-danger hover:bg-slate-400 rounded p-1 ml-4 font-bold bg-white"
                  onClick={onLogout}
                >
                  LogOut
                </button>
              ) : (
                <>
                  <Nav.Link className='text-white' href="/login">Login</Nav.Link>
                  <Nav.Link className='text-white' href="/register">Register</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>

      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link className='text-black' href="/" onClick={handleClose}>
              Home
            </Nav.Link>
            <Nav.Link className='text-black' href="/category" onClick={handleClose}>
              Event Categories
            </Nav.Link>
            <Nav.Link className='text-black' href="/setup-budget" onClick={handleClose}>
              Budget
            </Nav.Link>
            <Nav.Link className='text-black' href="/category-vendor" onClick={handleClose}>
              Vendors
            </Nav.Link>
            {user ? (
              <button
                type="button"
                className="text-danger hover:bg-slate-400 rounded p-1 ml-4 font-bold bg-white"
                onClick={onLogout}
              >
                LogOut
              </button>
            ) : (
              <>
                <Nav.Link className='text-black' href="/login" onClick={handleClose}>
                  Login
                </Nav.Link>
                <Nav.Link className='text-black' href="/register" onClick={handleClose}>
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
