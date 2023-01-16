import React from 'react'
import { Navigate } from 'react-router-dom';

const LoginForm = () => {

  const [loginSuccess, setLoginSuccess] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = () => {
    // axios post request 
    //setLoginSuccess(true)
  }

  return (
    loginSuccess ? <Navigate to = "/details"/> : 
    <div className='container'>
      <h1>Login</h1>
      <div className="col-sm-4">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input 
        type="email" 
        className="form-control"  
        placeholder="name@example.com" 
        onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='col-sm-4'>
        <label for="exampleFormControlInput2" className="form-label">Password</label>
        <input 
        type="password" 
        className="form-control"  
        placeholder="******" 
        onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <br/>
      <div className='col-sm-4'>
        <button 
        type="button" 
        className="btn btn-success"
        onClick={handleSubmit}
        >Submit
        </button>
      </div>
    </div>
  )
}

export default LoginForm;