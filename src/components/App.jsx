import React from 'react';
import { Container } from './Container/Container';
import { Navigation } from './Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import { Register }  from 'pages/register/Register';
import { Login } from 'pages/login/Login';
import { Contacts } from 'pages/contacts/Contacts';


export const App = () => {



    
    return (
      <Container>
        <Navigation />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </Container>
    );
  };
