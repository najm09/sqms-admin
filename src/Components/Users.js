import React from "react";
import axios from "axios";

const link = process.env.REACT_APP_LINK;

const Users = () => {
  const [users, setUsers] = React.useState();

  var id = 0;

  React.useEffect(() => {
    const getUsers = async () => {
      await axios
        .get(`${link}/users`)
        .then((res) => setUsers(res.data))
        .catch((err) => console.error(err));
    };

    getUsers();
  }, []);

  return (
    <div style={{ margin: "3em" }}>
      <h1>Users List </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users
            ? users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                );
              })
            : "Loading..."}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
