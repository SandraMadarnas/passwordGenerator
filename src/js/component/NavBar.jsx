import React from 'react';
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Generador de Contraseñas</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/my-passwords">Contraseñas</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;