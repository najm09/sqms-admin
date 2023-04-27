import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { updateAdminUser } from './AdminActionsSlice';

const AdminActionForm = () => {

  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  return (
    <Box>
      <TextField
        color='primary'
        variant='standard'
        required
        type='email'
        id="outlined-required"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        variant='text'
        onClick={() => dispatch(updateAdminUser({ email, role: "admin" }))}
        disabled={!email}>
        Allow Admin Access
      </Button>
      <Button
        variant='text'
        onClick={() => dispatch(updateAdminUser({ email, role: "user" }))}
        disabled={!email}>
        Disallow Admin Access
      </Button>
    </Box>
  )
}

export default AdminActionForm