import React from 'react';
import logo from '../../assets/logo.svg';
import PropTypes from 'prop-types';
import './Login.css';
import { useState } from 'react';
import { URL } from "../../API/API"

async function loginUser(credentials) {
  return fetch(URL + '/auth/token', {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      'login': username,
      'password': password
    });
    setToken(token);
  }

  return (
    <div className='login-wrapper'>
      <div className='brand-wrapper'>
        <img src={logo} alt='logo'></img>
        <p>
          Halva& <br />
          Povidlo
        </p>
      </div>
      <div className='form-wrapper'>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={e => setUsername(e.target.value)} placeholder='Login' />
          <input type="password" onChange={e => setPassword(e.target.value)} placeholder='Password' />
          <p> { } </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}