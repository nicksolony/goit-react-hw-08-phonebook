import { Container } from './Container/Container';
import { Navigation } from './Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import { Register }  from 'pages/register/Register';
import { Login } from 'pages/login/Login';
import { Contacts } from 'pages/contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authOperations, authSelectors } from 'redux/auth';
import { Home } from 'pages/home/Home'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const App = () => {

  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

    
    return (
      <Container>
        
        {isFetchingCurrentUser ? (
          <h1>Loading User Data</h1>
        ) : (
            <>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route element={<PublicRoute redirectTo='/contacts' restricted />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute redirectTo='/'  />}>
                  <Route path="/contacts" element={<Contacts />} />
                  </Route>
              </Routes>
          </>)}
      </Container>
    );
  };
