import axios from 'axios';
import React from 'react'
import { Navigate } from 'react-router-dom';
import { MAIN_URL, endpoints } from '../../Constants/Urls';

const LoginForm = () => {

  const [admin, setAdmin] = React.useState(false)
  const [message, setMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async () => {

    const body = { 
      email: email, password: password 
    }

    await axios.post(`${MAIN_URL.ALL_DETAILS}${endpoints.LOGIN}`, body)
      .then(response => {
        if (response?.status === 200) {
          if (response?.data?.role === "admin") {
            localStorage.setItem("access-token", response?.data?.accessToken)
            setAdmin(true)
          }
          else setMessage("Sorry You're not an Admin !")
        }
        else setMessage("Wrong Credentials")
      })
      .catch(error => console.error(error))
  }

  return (
    admin ? <Navigate to="/dashboard" /> :
      <div className='container'>
        <h1>Login</h1>
        {
          message ? <div className="alert alert-danger" role="alert">{message}</div> : ""
        }
        <div className="col-sm-4">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='col-sm-4'>
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
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