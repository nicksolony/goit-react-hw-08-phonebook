import { useState } from "react";
import { Form, FormLabel } from "./Login.styled";
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { contactsApi } from "redux/contacts/contactsSlice";

export const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
  };

      const handleSubmit = e => {
        e.preventDefault();
          dispatch(contactsApi.util.resetApiState())
          dispatch(authOperations.logIn({ email, password }));
          setEmail('');
          setPassword('');
        };

      return (
    <div>
      <h1>Login Page</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </FormLabel>

        <FormLabel>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </FormLabel>

        <button type="submit">Login</button>
      </Form>
    </div>
      );
    
};