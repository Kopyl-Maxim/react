import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterPage from './pages/Register';
import {AuthProvider} from './Auth';
import PrivateRoute from './PrivateRoute';
import Profile from "./pages/Profile"
import TitleInput from "./pages/Title"
const App = () => {

  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/Profile" component={Profile}/>
          <Route exact path="/RegisterPage" component={RegisterPage}/>
          <Route exact path="/pages/:id" render={({match}) => (
            <TitleInput id={match.params.id}/>
          )}/>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
