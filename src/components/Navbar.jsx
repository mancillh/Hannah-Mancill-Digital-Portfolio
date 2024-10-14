import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Navbar.css';

function NavbarSection() {
  return (
    <Navbar bg="dark" expand="lg" className="personal">
      <Container fluid>
        <Navbar className="MyNameBig">Hannah Mancill</Navbar>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll" bg="light">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <NavDropdown title="Portfolio" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#FrontEnd">Front End Projects</NavDropdown.Item>
              <NavDropdown.Item href="#BackEnd">Back End Projects</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://docs.google.com/document/d/1c8Zj0lmZjFcHxiXmcTRqB5VnD4KqDBy-SLIdxlB21s0/edit?usp=sharing">
              Resume
            </Nav.Link>
            <Nav.Link href="#ContactMe">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;
