import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logoImg from './ZF2.png';

const CustomNavbar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logoImg}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Zaru Fashion - Product Turnover
          </Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Ricardo Castano</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default CustomNavbar;