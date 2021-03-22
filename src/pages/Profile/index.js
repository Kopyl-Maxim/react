import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import firebase from '../../Base'
import {Link} from "react-router-dom";
import {Container, Navbar, Nav} from "react-bootstrap";

function Profile({history}) {
    const [currentUser, setCurrentUser] = useState()
    useEffect(() => {
        setCurrentUser(localStorage.getItem('email'));
    }, [])
    const [newLogin, setNewLogin] = React.useState();
    const [newName, setNewName] = React.useState();
    const [newLastName, setNewLastName] = React.useState();
    const [newDate, setNewDate] = React.useState();
    const {register} = useForm();
    const onCreate = () => {
        const db = firebase.firestore();
        db.collection("Users").add({name: newName, lastname: newLastName, date: newDate, login: newLogin});
        history.push('/Users')
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="/"><h2>Profile</h2></Navbar.Brand>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="link" to="/Users">Users</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Navbar.Brand>
                    {currentUser && <h5>Admin {currentUser}</h5>}
                </Navbar.Brand>
            </Navbar>
            <form>
                <label>
                    Login
                </label>
                <input name="Login" onChange={e => setNewLogin(e.target.value)} type="text"
                       placeholder="Login" ref={register()}/>
                <label>
                    Name
                </label>
                <input name="Name" onChange={e => setNewName(e.target.value)} type="name"
                       placeholder="Name" ref={register()}/>
                <label>
                    Lastname
                </label>
                <input name="LastName" onChange={e => setNewLastName(e.target.value)} type="lastname"
                       placeholder="LastName" ref={register()}/>
                <label>
                    Date
                </label>
                <input name="newDate" type="date" id="date" onChange={e => setNewDate(e.target.value)}
                       ref={register()}/>
                <input type="submit" onClick={onCreate} value="Create profile"/>
            </form>
        </div>
    );
};

export default Profile;


