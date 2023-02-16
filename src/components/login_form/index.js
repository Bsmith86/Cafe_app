import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { logIn } from '../../utilities/user-function';



const Login = () => {

    const [formState, setFormState] = useState({email: '', password: ''});
    const [error, setError] = useState(null);

useEffect(() => {
  let getSessionInfo = async () => {
    let res = await axios('/session-info')
    console.log(res);
  }
  getSessionInfo()
}, [])


    const handleChange = (event) => {
        let propertyName = event.target.name;
        setFormState({
            ...formState,
            [propertyName]: event.target.value,
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await logIn(formState)

    }
    let disable = formState.email && formState.password ? false : true;
  return (
    <div>
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" value={formState.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={formState.password} onChange={handleChange} required />

        <button type="submit" disabled={disable}>Login</button>
      </form>
    </div>
    <p className="error-message">&nbsp;{error}</p>
  </div>
  )
}

export default Login;