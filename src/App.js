import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./login-page";
import RegisterPage from "./register-page";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
         <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/RegisterPage" component={RegisterPage} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
