import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import CustomersPage from './pages/customersPage';
import NotFoundPage from './pages/notFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="/customers" component={CustomersPage} />
          <Route component={NotFoundPage} />
      </div>
    </Router>
  );
};

export default App;

