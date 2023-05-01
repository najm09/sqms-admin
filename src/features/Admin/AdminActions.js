import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { updateAdminUser } from './AdminActionsSlice';

const AdminActionForm = (props) => {
  const dispatch = useDispatch();
  const { role, email } = props;
  console.log(email);
  return (
    <div>
      {
        role === "admin" ?
          <Button sx={{ textTransform: 'lowercase !important' }} onClick={() => {dispatch(updateAdminUser({email, role: "user"}))}}>
            Remove Admin
          </Button> :
          <Button sx={{ textTransform: 'lowercase !important' }} onClick={() => {dispatch(updateAdminUser({email, role: "admin"}))}}>
            Promote admin
          </Button>
      }
    </div>
  )
}

export default AdminActionForm