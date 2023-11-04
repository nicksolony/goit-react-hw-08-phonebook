import { Container } from './Container/Container';
import { Navigation } from './Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import { Register }  from 'pages/register/Register';
import { Login } from 'pages/login/Login';
import { Contacts } from 'pages/contacts/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import {Home} from 'pages/home/Home'


export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

    
    return (
      <Container>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </Container>
    );
  };
