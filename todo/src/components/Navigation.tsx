import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

type Props={}

export default function Navigation({}:Props) {


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>To Do List</Navbar.Brand>
        <Nav className="me-auto">
            <>
              <Nav.Link href="#home">Add Item</Nav.Link>
              <Nav.Link href="#link">List</Nav.Link> 
            </> 

        </Nav>
      </Container>
    </Navbar>
  );
}
