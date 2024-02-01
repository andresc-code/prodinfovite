import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavMenu = ({ menuDataInput, handleInputChange, query, onFamilyChange }) => {
  const arrayMenu=menuDataInput;
  const [menuItems, setMenuItems] = useState([]);

  const handleFamilyChange = (selectedFamily) => {
    onFamilyChange(selectedFamily); // Llama a la función proporcionada por App para actualizar 'family'
  };
  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Elementos de menú generados desde el JSON */}

              {arrayMenu.map((menu) => {
          return (
            <NavDropdown title={menu.title} id={`basic-nav-dropdown-${menu.title}`} key={menu.title}>
            {menu.items.map((item) => (
              <NavDropdown.Item onClick={() => handleFamilyChange(item.title)} key={item.title}>
                {item.title}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          );
        })}

            </Nav>
            <div className="d-flex">
              <input
                type="search"
                placeholder="Enter your search product."
                className="form-control me-2"
                aria-label="Search"
                value={query}
                onChange={handleInputChange}
              />
            </div>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="basic-navbar-nav" size="md" />
        </Container>
      </Navbar>
    </>
  );
};

export default NavMenu;
