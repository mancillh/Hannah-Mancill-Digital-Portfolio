// Styles for Navbar (Bootstrap styles first, then custom CSS styling)
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../styles/Navigation.css';

// Renders Navbar Component
export default function Navigation() {
  return (
    <>
    <Navbar collapseOnSelect bg="black" expand="lg" className="personal-navbar-styling" variant="dark">
        <Container>
          <Navbar className="MyNameBig">Hannah Mancill</Navbar>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="ml-auto" id="responsive-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href='./about'>About</Nav.Link>
              <NavDropdown title="Portfolio" id="collapsible-nav-dropdown">
                <NavDropdown.Item href='./front-end'>Front End Projects</NavDropdown.Item>
                <NavDropdown.Item href='./back-end'>Back End Projects</NavDropdown.Item>
                <NavDropdown.Item href='./full-stack'>Full Stack Projects</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="https://docs.google.com/document/d/1c8Zj0lmZjFcHxiXmcTRqB5VnD4KqDBy-SLIdxlB21s0/edit?usp=sharing">
                Resume
              </Nav.Link>
              <Nav.Link href='./contact'>Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}