
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({
    email: '',
    fullname: '',
    phoneNumber: '',
    password: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert(`User ${data.fullname} registered!`);
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Signup failed. Please try again.');
    }
  };

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '400px',
      margin: 'auto',
      fontFamily: 'Arial, sans-serif',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      fontSize: '16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    link: {
      marginTop: '15px',
      textAlign: 'center',
      fontSize: '14px',
      color: '#007bff',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Signup</h2>
      <form onSubmit={handleSubmit}>
        {['email', 'fullname', 'phoneNumber', 'password', 'address'].map((field) => (
          <div key={field}>
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
        ))}
        <button type="submit" style={styles.button}>Register</button>
      </form>
      <div style={styles.link} onClick={() => navigate('/login')}>
        Already have an account? Login
      </div>
    </div>
  );
}

export default Signup;
