import React, {useEffect, useState} from "react";
import app from "./base";
import "firebase/auth";


const Home = () => {
    const [currentUser, setCurrentUser] = useState()
    useEffect(() =>{
        app.auth().onAuthStateChanged((user) =>{
            setCurrentUser(user)
        })
    }, [])

  return (
    <>
        {currentUser && <>
            <h1 className="email">{currentUser.email}</h1>
            </>}

      <button className="btn" onClick={() => app.auth().signOut()}>Logaut</button>
        </>
        );
        };

export default Home;
