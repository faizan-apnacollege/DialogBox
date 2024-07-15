import React, { useState } from 'react';
import { Button, colors } from '@mui/material';
import Dashboard from './components/Dashboard';
import './index.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignUpForm';

const App = () => {

  return (
    <div>
      <div style={{ backgroundColor: '#fff' }}>
        {/* <div> */}
        {/* <Dashboard /> */}
        {/* <LoginForm /> */}
        <SignupForm />
      </div>
    </div>
  );
};

export default App;
