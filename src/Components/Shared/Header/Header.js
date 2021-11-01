import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';


const Header = () => {
    const { user, logOut } = useFirebase()
    return (
        <div>

            <div className="pb-5">
                <Navbar className="fixed-top" collapseOnSelect navbar-expand-lg expand="lg" bg="dark" variant="dark">
                    <Container>
                        <img as style={{ width: '15%' }} src="https://i.ibb.co/Y3LkcmN/Screenshot-65-removebg-preview-removebg-preview.jpg" />

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="ps-5" id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="head-text ml-10 no-underline text-white tw-pr-56" to="/home">Home</Link>


                                <Link className="head-text pl-10 no-underline text-white" to="/services">Services</Link>
                                <Link className="head-text pl-10 no-underline text-white " to="/tripdetails">Trip Details</Link>

                                <Link className="head-text pl-10 no-underline text-white" to="/aboutus">About Us</Link>
                                <Link className="head-text no-underline pl-10 text-white" to="/addservice">Add A service</Link>
                                <Link className="head-text pl-8 no-underline  text-white" to="/manageservices">Manage All Services</Link>


                            </Nav>


                            {user.email && <Navbar.Text>
                                Signed in as- {user.displayName}

                            </Navbar.Text>}
                            {
                                user?.email ?
                                    <button className="text-white ml-3" onClick={logOut}>Log Out</button>
                                    :
                                    <NavLink className=" text-white text-2xl no-underline" to="/login">LogIn</NavLink>}

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;