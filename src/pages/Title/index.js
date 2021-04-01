import React, {useState} from "react";
import firebase from "../../Base";
import {Container, Navbar} from "react-bootstrap";

const TitleInput = (id) => {
  const [loading, setLoading] =React.useState(true);
  const [spell, setSpell] = React.useState({});
  const [currentUser, setCurrentUser] = useState()
  const fetchData = async () => {
    try {
      setLoading(true);
      const db = firebase.firestore();
      const data = await db.collection("pages").get();
      setSpell({...data.docs.find(doc => doc.id==id.id).data()})
    } catch (e) {} finally {setLoading(false);}
  };
  React.useEffect(() => {
    setCurrentUser(localStorage.getItem('email'));
    fetchData();
  }, [])
  if(loading) return null
  return(
    <body>
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/"><h2>Profile</h2></Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      </Container>
      <Navbar.Brand>
        {currentUser && <h5>Admin {currentUser}</h5>}
      </Navbar.Brand>
    </Navbar>
    <div>
     <h2>{spell.title}</h2>
      <h2>{spell.desc}</h2>
        <h2>{new Date(spell.createdAt.toDate()).toDateString()}</h2>
    </div>
    </body>
  )
};

export default TitleInput;