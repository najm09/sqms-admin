import React from 'react';
import axios from 'axios';

const link = process.env.REACT_APP_LINK;

const Users = () => {
  const [users, setUsers] = React.useState([]);

  const accessToken = localStorage.getItem('access-token');

  const headers = {
    'Content-type': 'application/json',
    'access-token': accessToken
  };

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await axios.get(`${link}/users`, { headers: headers });
        setUsers(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div style={{ margin: '3em' }}>
      <h1>Users List </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0
            ? users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                );
              })
            : 'Loading...'}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
