import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Home />
        <AddUser />
        <EditUser />
      </Router>
    </div>
    
  )
}

export default App;