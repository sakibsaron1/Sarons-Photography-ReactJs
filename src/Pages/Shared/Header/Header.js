import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
      signOut(auth);
  }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Saron's Photography</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
    </Nav>
    <Nav>

    
                            {
                                user ?
             <button className='btn btn-warning btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
          <Nav.Link className='btn btn-warning text-white' as={Link} to="login">
                                Login
    </Nav.Link>}

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;