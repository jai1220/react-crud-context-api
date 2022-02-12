import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';
import { GlobalProvider } from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div style={{ margin: "4rem" }}>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  )
}

export default App;