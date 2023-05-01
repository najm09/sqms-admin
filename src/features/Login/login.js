import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Alert, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from './loginSlice';
import { useStyles } from './styles';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {fetching, isAdmin, loginMessage, error } = useSelector(({ loginActionReducer }) => loginActionReducer);

  const handleSubmit = () => {
    dispatch(loginAction({ email, password }));
  }
  useEffect(() => {
    if (isAdmin) navigate("/dashboard");
  })

  return (
    <div className={classes.root}>
      {error ? <Alert severity="error">{error}</Alert> : 
      loginMessage ? <Alert severity='warning'>{loginMessage}</Alert>: ""}
      &nbsp;
      <h3>SQMS ADMIN LOGIN</h3>
      &nbsp;
      <TextField
        color='success'
        required
        type='email'
        id="outlined-required"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      &nbsp;
      <TextField
        color='success'
        required
        type='password'
        id="outlined-required"
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button disabled={fetching || !email || !password} onClick={handleSubmit} variant='contained' color='success'>
        Login
      </Button>
    </div>
  )
}

export default LoginForm;