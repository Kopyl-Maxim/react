import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterPage from './pages/Register';
import {AuthProvider} from './Auth';
import PrivateRoute from './PrivateRoute';
import Profile from "./pages/Profile"
import firebase from "./Base";
import TitleInput from "./pages/Title"

const App = () => {
  const [spells, setSpells] = React.useState([]);
  const [loading, setLoading] =React.useState(true);
  const fetchData = async () => {
    try {
      setLoading(true);
      const db = firebase.firestore();
      const data = await db.collection("pages").get();
      setSpells(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    } catch (e) {} finally {setLoading(false);}
  };
  React.useEffect(() => {
    fetchData();
    console.log("spell", spells)
  } )
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/Profile" component={Profile}/>
          <Route exact path="/RegisterPage" component={RegisterPage}/>
          <Route exact path="/pages/:id" render={({match}) => (
            <TitleInput spells={spells}/>
          )}/>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
