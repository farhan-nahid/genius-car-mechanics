import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Login from './Pages/Auth/Login/Login';
import PrivateRoute from './Pages/Auth/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import ManageService from './Pages/ManageService/ManageService';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          {/* <Route path='/add-service' component={AddService} />
          <Route path='/manage-service' component={ManageService} /> */}
          <PrivateRoute path='/booking/:serviceId'>
            <Booking />
          </PrivateRoute>
          <PrivateRoute path='/manage-service'>
            <ManageService />
          </PrivateRoute>
          <PrivateRoute path='/add-service'>
            <AddService />
          </PrivateRoute>
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
