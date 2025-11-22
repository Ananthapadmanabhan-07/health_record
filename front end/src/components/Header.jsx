import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
NavDropdown
function Header() {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: '#002147' }}>
  <Container>
    <Navbar.Brand 
      href="#home" 
      style={{
        marginLeft: "50px", 
        fontSize: '40px', 
        color: '#FFD700', 
        fontWeight: 'bolder',
        fontFamily: 'Segoe UI'
        
      }}
    >
     PERSONAL HEALTH RECORD
    </Navbar.Brand>
    <button style={{ marginLeft: "50px", backgroundColor: '#e2dfcfff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Hospital Registration</button>
    <button style={{ marginLeft: "50px", backgroundColor: '#eae3beff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Citizen Registration</button>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown 
          title="Actions" 
          id="basic-nav-dropdown" 
          style={{ 
            marginLeft: "100px", 
            fontSize: "30px", 
            fontWeight: 'bold', 
            backgroundColor:'#FFD700'
          }}
        >
          <NavDropdown.Item href="/login">Sign in</NavDropdown.Item>
          <NavDropdown.Item href="/register">Sign up</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header
