import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddUser from './components/users/adduser'
import EditUser from './components/users/edituser'
import User from './components/users/user'
import NotFound from './components/pages/notfound';

function App() {
  return (
    <Router>
      <div className = "App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route component={NotFound} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
