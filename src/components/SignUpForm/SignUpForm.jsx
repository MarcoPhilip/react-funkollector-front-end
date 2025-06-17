// SignUpForm.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    passwordConf: '',
  });

  const { firstname, lastname, username, password, passwordConf } = formData;

  const handleChange = (evt) => {
    setMessage('');
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(formData); // this line will print the form data to the console
  };

  const isFormInvalid = () => {
    return !(firstname && lastname && username && password && password === passwordConf);
  };

  return (
    <main>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstname'>First Name:</label>
          <input
            type='text'
            id='firstname'
            value={firstname}
            name='firstname'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='lastname'>Last Name:</label>
          <input
            type='text'
            id='lastname'
            value={lastname}
            name='lastname'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            value={username}
            name='username'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            name='password'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='confirm'>Confirm Password:</label>
          <input
            type='password'
            id='confirm'
            value={passwordConf}
            name='passwordConf'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button disabled={isFormInvalid()}>Sign Up</button>
          <button onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default SignUpForm;
