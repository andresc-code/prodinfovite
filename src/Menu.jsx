// Menu.jsx

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImg from './ZF2.png';

const Menu = ({ onFamilyChange, query, onChange }) => {
  const handleFamilyChange = (selectedFamily) => {
    onFamilyChange(selectedFamily); // Llama a la función proporcionada por App para actualizar 'family'
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logoImg}
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Gender</Nav.Link>
            <NavDropdown title="Group" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleFamilyChange('T-shirt')}>
                T-shirt
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFamilyChange('Pant')}>
                Pant
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFamilyChange('Blouse')}>
                Blouse
              </NavDropdown.Item>
              {/* Agrega controladores de clic para otras opciones del menú */}
            </NavDropdown>
            {/* Agrega más elementos del menú */}
          </Nav>         
        </Navbar.Collapse>
        <input 
              type="text"
              value={query}
              onChange={onChange}
              placeholder='Search items'
              
           />
      </Container>
    </Navbar>
    
  );
};

export default Menu;
