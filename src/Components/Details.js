import React from 'react'
import axios from 'axios';

const link = process.env.REACT_APP_LINK

const Details = () => {

  const [users, setUsers] = React.useState();
  const [patients, setPatients] = React.useState();


  React.useEffect(() => {

    const getUsers = async() => {
      await axios.get(`${link}/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.err(err));
    }
    
    const getPatients = async () => {
      await axios.get(`${link}/patients`)
      .then(res => setPatients(res.data))
      .catch(err => console.error(err));
    }


    getUsers();
    getPatients();

  },[])

  return(
    <div>

      Connecting ...

    </div>
  )
}

export default Details