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
import Users from "./pages/Users"

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <PrivateRoute exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/Profile" component={Profile}/>
                    <Route exact path="/Users" component={Users}/>
                    <Route exact path="/RegisterPage" component={RegisterPage}/>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
