import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {UsersInput} from "../../Component/UsersInput";
import firebase from "../../Base";
import {Container, Nav, Navbar} from "react-bootstrap";

const Users = () => {
    const [toggle, setToggle] = useState(false);
    const [currentUser, setCurrentUser] = useState()
    useEffect(() => {
        setCurrentUser(localStorage.getItem('email'));
    }, [])
    const [spells, setSpells] = React.useState([]);
    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("Users").get();
            setSpells(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        };
        fetchData();
    }, [toggle]);
    const callback = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="/"><h2>Users</h2></Navbar.Brand>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="link" to="/Profile">Profile</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Navbar.Brand>
                    {currentUser && <h5>Admin {currentUser}</h5>}
                </Navbar.Brand>
            </Navbar>
            <form>
                {spells.map(spell => (
                    <Link className="link" key={spell.name}>
                        <UsersInput toggle={callback} spell={spell}/>
                    </Link>
                ))}
                <Link className="lnk" to='/Profile'>Create New Profile</Link>
            </form>

        </div>
    )
}
export default Users;