// SignUpForm.jsx

// Add the useContext from react
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';

// Import the signup function from authServices
import { signUp } from '../../services/authService';

// Import the UserContext object
import { UserContext } from '../../contexts/UserContext';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
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
    try {
        const newUser = await signUp(formData);
        // Call the setUser function to update the user state, just like normal.
        setUser(newUser);
        // Bring back user to home page using navigate function
        navigate('/');
    } catch (err) {
        setMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(firstname && lastname && username && password && password === passwordConf);
  };

  return (
    <main>
      <h3>Sign Up</h3>
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
