import React, {useEffect, useState,} from "react";
import firebase from "../../Base";
import "firebase/auth";
import {Link} from "react-router-dom";
import {Container, Navbar, Button, Nav, Form} from "react-bootstrap";

const Index = () => {
  const [spells, setSpells] = React.useState([]);
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    setCurrentUser(localStorage.getItem('email'));
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("pages").get();
      setSpells(data.docs.map(doc => ({...doc.data(), id: doc.id})));
      console.log("text", data)
    };
    fetchData();
  }, [])

  return (
    <body>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
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
      <main>
        <ul className="li_pg">
          {spells.map((data, i) =>
            <li key={i}><a className="ln_pg" href={`/pages/${data.id}`}>{data.title}</a></li>
          )}
        </ul>
      </main>
    </body>

  );
};

export default Index;
