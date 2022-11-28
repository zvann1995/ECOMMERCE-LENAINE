import React from 'react';
import { Navbar, Container, Nav, DropdownButton, Dropdown} from 'react-bootstrap';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies();
import Card from 'react-bootstrap/Card';


export default class menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    Logout(){
        cookies.remove('_s');
        window.location.reload();
    }

    render() {
        return (
            <Navbar fixed="top" id="navbar" bg="primary" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="#home" className='ms-5 transColor'>Stylolenanie.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/*<Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>*/}
                        </Nav>
                        <DropdownButton id="dropdown-basic-button" className='me-6' title="Usuario" >

                            {/* <Dropdown.Header>
                                <Dropdown.Item href="#/action-1">
                                    <FontAwesomeIcon icon={faUserGear} /> Cerrar sesión</Dropdown.Item>
                            </Dropdown.Header> */}
                            <Dropdown.Header id="dropwown-header">
                                <Dropdown.Item onClick={() => this.Logout()}>
                                    <FontAwesomeIcon icon={faRightFromBracket} /> Cerrar sesión</Dropdown.Item>
                            </Dropdown.Header>
                            {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        );
    }
}
