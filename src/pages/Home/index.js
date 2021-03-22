import React, {useEffect, useState,} from "react";
import firebase from "../../Base";
import "firebase/auth";
import {Link} from "react-router-dom";
import {Container, Navbar, Button, Nav} from "react-bootstrap";

const Index = () => {
    const [currentUser, setCurrentUser] = useState()
    useEffect(() => {
        setCurrentUser(localStorage.getItem('email'));
    }, [])
    return (
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand>
                {currentUser && <h4>{currentUser}</h4>}
            </Navbar.Brand>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Link className="link" to="/Profile">Profile</Link>
                    </Nav>
                </Navbar.Collapse>
                <form>
                    <Button variant="primary" className="mr-xs" onClick={() => {
                        firebase.auth().signOut();
                        localStorage.setItem('email', "")
                    }}>Logout</Button>
                </form>
            </Container>
        </Navbar>
    );
};

export default Index;
