import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function ColorSchemesExample() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home" className='col-12 col-md-4 text-end bg-warning'>Navbar</Navbar.Brand>
                <Nav className="me-md-auto" title="e는 오른쪽, s는 왼쪽">
                    <Link to="/">Home</Link>
                    <Link to="/com">회사소개</Link>
                    <Link to="/board">고객센터</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default ColorSchemesExample;
