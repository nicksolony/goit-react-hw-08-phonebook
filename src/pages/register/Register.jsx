import { useState } from "react";
import { Form, FormLabel } from "./Register.styled";
import { useAddUserMutation } from "redux/auth/authSlice";
import { toast } from "react-hot-toast";
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';

export const Register = () => {
    // const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [addUser] = useAddUserMutation();

      const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
      };
  
    const handleSignUp = async data => {
      try {
      await addUser(data);
      toast.success(`Successfully signed up ${name}!`)
    } catch (error) {
      toast.error(data.message)
    }
  };

  const registerUser = (name, email, password) => {
    let newUser = { name, email, password };
    handleSignUp(newUser);
  };

      const handleSubmit = e => {
          e.preventDefault();
          console.log({name, email, password});
        registerUser(name, email, password);
            setName('');
            setEmail('');
            setPassword('');
        };

      return (
    <div>
     <h1>Signup Page</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </FormLabel>

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

        <button type="submit">Signup</button>
      </Form>
    </div>
      );  
};