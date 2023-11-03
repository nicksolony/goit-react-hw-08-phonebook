import React from 'react';
import { NavButton } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavButton
        to="/register"
      >
        Sign Up
      </NavButton>
      <NavButton
        to="/login"
      >
        Login
      </NavButton>
    </div>
  );
}
