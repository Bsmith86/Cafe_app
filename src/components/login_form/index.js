import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/app_context';
import { logIn, getUserFromSession } from '../../utilities/user-function';



const Login = () => {
  let {setUser} = useContext(AppContext)


    const [formState, setFormState] = useState({email: '', password: ''});
    const [error, setError] = useState(null);
    

useEffect(() => {
  let getSessionInfo = async () => {
    
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
        let loginResponse = await logIn(formState);
        // get session info (user)
      let user = await getUserFromSession()
      setUser(user)  
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