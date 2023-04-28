import React, { useState, useEffect } from 'react'
import { Button, Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from './loginSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { fetching, isAdmin, loginMessage } = useSelector(({ loginActionReducer }) => loginActionReducer);

  const handleSubmit = () => {
    dispatch(loginAction({ email, password }));
  }

  useEffect(() => {
    if(isAdmin) window.location.replace("/dashboard");
  })

  return (
    <Grid container spacing={2} marginTop={10} justify="center" wrap="wrap" direction="column" width="30%">
      <Grid item xs={6} md={10}>
        <h1>Login</h1>
      </Grid>
      <Grid item xs={6} md={10}>
        <TextField
          color='success'
          fullWidth
          required
          type='email'
          id="outlined-required"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={6} md={10}>
        <TextField
          fullWidth
          color='success'
          required
          type='password'
          id="outlined-required"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item xs={6} md={12}>
        <Button color="success" variant="contained" disabled={fetching || !email || !password} onClick={handleSubmit}>
          Login
        </Button>
      </Grid>
    </Grid>
  )
}

export default LoginForm;