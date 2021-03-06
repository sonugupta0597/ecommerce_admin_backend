import React from 'react'
import { Form, FormControl, Nav, Navbar, NavDropdown, Button, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Signin from '../../container/Signin'

export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to='/' className='navbar-brand'>Admin Dashboard</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                            <li className='nav-item'><NavLink to="/signin" className='nav-link' >singin</NavLink></li>
                            <li className='nav-item'><NavLink to="/signup" className='nav-link' >singup</NavLink></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
