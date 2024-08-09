//client/src/pages/SignUp.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutation';
import Auth from '../utils/auth';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const SignUpForm = styled.form`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 0.875rem;
`;

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleFormSubmit}>
        <h2>Sign Up</h2>
        <Input
          type="text"
          name="first name"
          value={formState.fisrtName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <Input
          type="text"
          name="last name"
          value={formState.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <Input
          type="text"
          name="username"
          value={formState.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <Input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <Input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <Button type="submit">Sign Up</Button>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <p>
          Already a member? <Link to="/login">Log In</Link>
        </p>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default Signup;