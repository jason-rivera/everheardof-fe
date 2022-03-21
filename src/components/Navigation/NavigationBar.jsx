import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './NavigationBar.module.css';


const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  return(
    <div onClick={() => (expanded ? setExpanded(false) : false) }>
    <Navbar bg="dark" variant="dark" expand={false} expanded={expanded} >
      <Container fluid>
        
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <Navbar.Brand className={styles.navLink} as={Link} to="/"><div className={styles.navHeader}>everheardof</div></Navbar.Brand>
        <span className={styles.emptySpan}></span>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header className={styles.offCanvasHeader} closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">whatsup?</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={styles.offCanvasBody}>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className={styles.navLink} as={Link} to="/" onClick={() => setExpanded(false)}>home</Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/about" onClick={() => setExpanded(false)}>about</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar;