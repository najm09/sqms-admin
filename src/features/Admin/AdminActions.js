import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { updateAdminUser } from './AdminActionsSlice';
import { useStyles } from './styles';

const AdminActionForm = () => {

  const classes = useStyles();
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <TextField
        color='primary'
        variant='standard'
        required
        type='email'
        id="outlined-required"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Box marginTop={4} >
        <Button
          color='success'
          variant='text'
          onClick={() => dispatch(updateAdminUser({ email, role: "admin" }))}
          disabled={!email}>
          Allow Admin Access
        </Button>
        <Button
          color='error'
          variant='text'
          onClick={() => dispatch(updateAdminUser({ email, role: "user" }))}
          disabled={!email}>
          Disallow Admin Access
        </Button>
      </Box>
    </div>
  )
}

export default AdminActionForm