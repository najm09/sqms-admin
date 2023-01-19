import {React} from 'react'
import {axios} from 'axios';
import { getHeader } from '../Services/setUpAxios';
import { endpoints } from '../Constants/Urls';
import { MAIN_URL } from '../../Constants/Urls';

const Users = () => {

  const [users, setUsers] = React.useState();
  const [message, setMessage] = React.useState('');

  var id = 0;

  React.useEffect(() => {
    const getUsers = async () => {
      await axios.get(`${MAIN_URL.ALL_DETAILS}${endpoints.USERS}`, {headers : getHeader()})
        .then(res => {
          if (res.status === 200) {
            setUsers(res.data)
          }
          else setMessage('Access Denied !')
        })
        .catch(err => console.error(err));
    }
    getUsers();
  }, [])

  return (
    <div style={{ margin: '3em' }}>
      <h1>Users List </h1>
      {
        !message ? <table className='table'>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {
              users ? users.map(user => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                )
              }) : "Loading..."
            }
          </tbody>
        </table>
        : <div className="alert alert-danger" role="alert">{message}</div>
      }

    </div>
  )
}

export default Users