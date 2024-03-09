import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

function Header() { 
  const globalData = useSelector((store) => store.userReducer.loginData.return);

  console.log("globalData: ", globalData);
  
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">{globalData.email}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>

          <Nav className="">
            <Nav.Link href="/sign-up">
              <Button variant="primary">Sign Up</Button>
            </Nav.Link>

            <Nav.Link href="/sign-in">
              <Button variant="primary">Sign In</Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
